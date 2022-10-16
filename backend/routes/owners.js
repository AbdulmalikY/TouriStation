const router = require("express").Router();
const express = require("express")
const Owner = require("../models/Owner.model");
const OwnerReq = require("../models/OwnerReq.model");
const multer  = require("multer");
const upload = require("../Functions/images.js");
const valuechick = require("../Functions/Validator.js");
const {OwnerCreate, PlaceEdit} = require("../Functions/requestHandlre.js");
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const bcrypt = require("bcryptjs");
const passport = require ("passport")
const {SendMail, SendResetMail, SendCahngedEMail, randString, NewAccountMail} = require("../Functions/EmailVerifcation.js");
const {IsOwner, IsAdmin, IsUser, IsGoogle} = require("../Functions/getUserType.js");
const Review = require("../models/CommentsARatings.model");
const Favorite = require("../models/Favorite.model");
const { uploadFile, getFileStream } = require("../config/s3");
const Admin = require("../models/Admin.model");





router.route("/").get((req, res) =>{
  IsAdmin(req._passport.session.user).then(function(result){
    Owner.find()
       .then(Owneres => res.json(Owneres))
       .catch(err => res.Status(400).json({message: "Error : " +err}))
      })
    })



//Retrive All owners that are not approved or denied yet
router.route("/request").get((req, res) =>{

  if(req._passport.session == undefined){
    return res.status(401).json( { message:"You are not uthorized Please login"})
  }


   IsAdmin(req._passport.session.user).then(function(result){
     if(result == true){
    OwnerReq.findOne({Status: 'Pendding'/*, isValid: "true"*/})
         .then(Owneres => {
          res.json(Owneres)})
         .catch(err => res.Status(400).json({message: "Error : " +err}))
        }else{
          return res.status(400).json( { message:"You Are Not Authnticated"})}
        })
    })






//The route will add a Owner account in the Ownerreq it needs admin approve to be active
router.post('/register', upload.single('icon'), async function(req, res) {
   const FName = req.body.FName;
   const LName = req.body.LName;
   const Email = req.body.Email;
   const Password1 = req.body.Password1;
   const Password2 = req.body.Password2;
   const OwnerDes = req.body.OwnerDes;
   const Status = "Pendding";
   const isValid = false;
   const validString = randString();
   const UserType = "owner"
     let icon;
     if(req.file == undefined){
      icon = "uploads/DefaultIcon.jpg"
   }else{
   const result = await uploadFile(req.file)
    icon = result.key
   }

   
   //chick if the mandtory inputs are filled
   if(!FName || !Email || !Password1 || !Password2){
    return res.status(400).json({message: "Please Fill all mandtory values"}) //--> Add error status so it can be handeld in front end proprley
  }

//Match password
  if (Password1 != Password2){
    return res.status(401).json({message: "Passwords do not match"})
  }

//Chick password strength
  if (Password1.length < 8){
    return res.status(401).json({message: "Password Must be at least 8 charecters"})
  }

Owner.findOne({ "Email" : {
   $regex : new RegExp(req.body.Email, "i") } }).then (owner =>{
    if(owner){
      return res.status(409).json({message: "The Owner with: " + Email+ " is registerd"})
    }
  })
OwnerReq.findOne({ "Email" : {
  $regex : new RegExp(req.body.Email, "i") } })
  .then(async owner =>{
    if(owner && Email != undefined){
      return res.status(401).json({message: "The Owner with: " + Email + " is registerd"})
  }
  else{
    const Password = await bcrypt.hash(req.body.Password1, 10);
    const newOwner = new OwnerReq({
      FName,
      LName,
      Email,
      Password,
      icon,
      OwnerDes,
      Status,
      isValid,
      validString,
      UserType,
     });

    newOwner.save()
    .then(() => SendMail(Email, validString, "owners"))
    .then(() => res.status(200).json({message: "Owner Added"}))
    .catch(err => res.status(400).json({message: "Error: something went wrong"}))
  }
  });
});



router.route("/profile").get((req, res) => {
  
  if(req._passport.session == undefined){
    return res.status(401).json( { message:"You are not uthorized Please login"})}

  let data = []
  let reviews = []
  let faviortes = []

  let faviortesP = []


  Owner.findById(req._passport.session.user)
  .then(user => { 
    data.push(user.FName, user.LName, user.icon, user.Email, user._id, user.createdAt)
    return Review.find({"ReviewOwner": req._passport.session.user})
  })
  .then(resreviews => {
    reviews = resreviews
    return Favorite.find({"FavoriteOwner": req._passport.session.user})
  })
  .then(async  UserFaviorte =>{
  // console.log(UserFaviorte.length);
  faviortes = UserFaviorte
   for (let index = 0; index < UserFaviorte.length; index++) {
        const result =  await Place.findOne({_id: UserFaviorte[index].FavoritePlace})
        if(result != null){
        faviortesP.push(result)}
  }
})
 
  .then(() => {
// console.log(faviortes);
  res.json({
    "User": data, 
    "UserReviews": reviews,
    "UserFaviorte": faviortesP,
  })})
  .catch(err => console.log(err))
})


router.route("/profiles").get((req, res) => {
  console.log("User");
  if(req._passport.session == undefined){
    return res.status(401).json( { message:"You are not uthorized Please login"})
  }

  let data = []
  let reviews = []
  let faviortes = []
  let faviortesP = []

  console.log("user");

  Admin.findById(req._passport.session.user)
  .then(user => { 
    console.log(user);
    data.push(user.FName, user.LName, user.icon, user.Email, user._id, user.createdAt)
    return Review.find({"ReviewAdmin": req._passport.session.user})
  })
  .then(resreviews => {
    reviews = resreviews
    return Favorite.find({"FavoriteAdmin": req._passport.session.user})
  })
  .then(async  UserFaviorte =>{
  // console.log(UserFaviorte.length);
  faviortes = UserFaviorte
   for (let index = 0; index < UserFaviorte.length; index++) {
        const result =  await Place.findOne({_id: UserFaviorte[index].FavoritePlace})
        if(result != null){
        faviortesP.push(result)}
  }
})
 
  .then(() => {
// console.log(faviortes);
  res.json({
    "User": data, 
    "UserReviews": reviews,
    "UserFaviorte": faviortesP,
  })})
  .catch(err => console.log(err))
})

//Login Handler
router.route("/login").post((req, res, next) =>{
  passport.authenticate("owner-local", function(err, user, info) {
    if(err){ res.status(404).json({message: "Email or password are not correct"}) }
    if(user){
      req.logIn(user, (err) =>{
        if(err){
          res.json(err)
        }else{
          res.status(200).json({message: "Loged in sucessed"})
        }
      })
    }else{
      res.status(401).json({message: "Wrong Email or Password"})
    }
    })(req, res, next);
});


router.route("/:id").get((req, res) => {
  console.log(req.params.id);
  Owner.findById(req.params.id)
  .then(owner => res.json(owner))
  .catch(err => res.status(400).json({message: "Error: something went wrong"}))
})

router.route("/:id").delete((req, res) => {
  Owner.findByIdAndDelete(req.params.id)
  .then(() => res.json("Owner Deleted"))
  .catch(err => res.status(400).json({message: "Error: something went wrong"}))
})

//Hnadle Owner request
  router.route("/request/:id").post((req, res) => {


  OwnerReq.findById(req.params.id)
  .then(owner => {
    owner.Status = valuechick(owner.Status, req.body.Status) ;
    owner.AdminDes = req.body.AdminDes;
    owner.RequestAdmin = req.body.Admin;

    owner.save()
    .then(() => res.json(OwnerCreate(owner)))
    .catch(err => console.log(err))
  })
  .catch(err => console.log(err))
})


router.post("/update/:id", upload.single('icon'),  (req, res) => {
  Owner.findById(req.params.id)
  .then(async owner => {
    owner.FName = valuechick(owner.FName, req.body.FName);
    owner.LName = valuechick(owner.LName, req.body.LName);
    owner.Password = valuechick(owner.Password, req.body.Password);
    
    if(req.file != undefined){
      const result = await uploadFile(req.file)
      icon = result.key  
    }

    owner.save()
    .then(() => res.json("Owner Updated"))
    .catch(err => res.Status(400).json({message: "Error : " +err}))
  })
  .catch(err => res.Status(400).json({message: "Error : " +err}))
})

router.route("/verify/:ValidatorString").get( async (req, res) => {
  const validstring  = req.params.ValidatorString
  const owner = await OwnerReq.findOne({validString: validstring })
  if(owner){
    if (owner.isValid == true) {
      res.redirect('http://localhost:3001/') 
   }else{
      owner.isValid = true
      owner.validString = ""
      await owner.save()
      .then(() => res.redirect("http://localhost:3001/"))
      .catch(err => res.status(400).json({message: "Something went wrong please try again"}))      
    }
  }else{
    res.json("Owner Not found")
  }
})

//Handle reset password request
router.route("/passwordreset").post( async (req, res) => {
  const Email = req.body.Email;
  const owner = await Owner.findOne({ "Email" : {
  $regex : new RegExp(Email, "i") } })

  const validString = randString();

  if(owner){
    owner.validString = validString;
    owenr.save()
    .then(() => SendResetMail(Email, validString, "owners"))
    .then(() => res.json("Reset password email is sent"))
    .catch(err => res.status(400).json({ message:"Error : please try again"}))
  }else{
    res.json("Owner Not found")
  }
})

//Owner recive a link form email to this route to get approved and redirected
router.route("/resetpass/:validstring/:Email").get( async (req, res) => {

  const validstring = req.params.validstring;
  const Email = req.params.Email;

  const owner = await Owner.findOne({validString: validstring, "Email" : {
  $regex : new RegExp(req.body.Email, "i") }})

  if(owner){
    //Send Changed password file.html
     }
  else{
    res.json("the request is invalid")
  }
})

router.route("/resetpass/:validstring/:Email").post( async (req, res) => {
console.log(req.body);
  const password1 = req.body.Password1;
  const password2 = req.body.Password2

  const validstring = req.params.validstring;
  const Email = req.params.Email;

  let errors = [];

  if(!password1 || !password2){
    return res.status(400).json( { message:"Please Fill all mandtory values"}) 
  }

  if(password1.length < 8){
    return res.status(400).json( { message:"password must be at least 8 charecters"}) //--> Add error status so it can be handeld in front end proprley
  }

  if(password1 != password2){
    return res.status(400).json( { message:"Passwords do not match"}) 
  }

  const owner = await Owner.findOne({validString: validstring, "Email" : {
  $regex : new RegExp(req.body.Email, "i") } })
  .then (async owner =>{
    if(!owner){
      return res.status(409).json( { message:"Invalid request"}) //--> Add error status so it can be handeld in front end proprley

  }
   else{
        const Password = await bcrypt.hash(req.body.Password1, 10);
        owner.Password = Password;
        owner.validString = "";
        owner.save()
      .then(() => SendCahngedEMail(Email, "owners"))
      .then(() => res.json({message: "Your Password is changed successfully"}))
      .catch(err => res.status(400).json({message: "Error something went wrong"}))
      }
});
})


module.exports = router;
