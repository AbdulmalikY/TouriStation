const router = require("express").Router();
const Admin = require("../models/Admin.model");
const multer  = require("multer");
const upload = require("../Functions/images.js");
const valuechick = require("../Functions/Validator.js");
const passport = require("passport")
const {SendMail, SendResetMail, SendCahngedEMail, randString, NewAccountMail} = require("../Functions/EmailVerifcation.js");
const bcrypt = require("bcrypt");
const path = require("path");
const {IsOwner, IsAdmin, IsUser, IsGoogle} = require("../Functions/getUserType.js");
const Review = require("../models/CommentsARatings.model");
const Favorite = require("../models/Favorite.model");
const { uploadFile, getFileStream } = require("../config/s3");



router.route("/").get((req, res) =>{
  if(req._passport.session == undefined){
    return res.status(401).json( { message:"You are not uthorized Please login"})}
  IsAdmin(req._passport.session.user).then(function(result){
    if (result == true){
    Admin.find()
      .then(admins => res.json(admins))
      .catch(err => res.Status(400).json({message: "Error : " +err}))
    }else{
      res.status(400).json({ message:"You are not uthorized"})
    }
  })    
})
    
 
router.post('/register', upload.single('icon'), async function(req, res) {


  //  console.log(req._passport);
   const FName = req.body.FName;
   const LName = req.body.LName;
   const Email = req.body.Email;
   const Password1 = req.body.Password1;
   const Password2 = req.body.Password2;
   const isValid = false;
   const validString = randString();
   const UserType = "admin"
   let icon;
   if(req.file == undefined){
    icon = "uploads/DefaultIcon.jpg"
 }else{
 const result = await uploadFile(req.file)
  icon = result.key
 }
//chick if the mandtory inputs are filled
if(!FName || !Email || !Password1 || !Password2){
  return res.status(400).json( { message:"Please Fill all mandtory values"}) //--> Add error status so it can be handeld in front end proprley
}

//Match password
if (Password1 != Password2){
  return res.status(401).json({ message:"Passwords do not match"})
}

//Chick password strength
if (Password1.length < 8){
  return res.status(401).json({ message:"Password Must be at least 8 charecters"})
}

  Admin.findOne({ "Email" : {
  $regex : new RegExp(req.body.Email, "i") } })
    .then ( async admin =>{
      if(admin && Email != undefined){
        return res.status(409).json({ message:"The Admin with: " + Email+ " is registerd"})
      }
      else
      {
          const Password = await bcrypt.hash(req.body.Password1, 10);
          const newAdmin = new Admin({
            FName,
            LName,
            Email,
            Password,
            isValid,
            validString,
            icon,
            UserType,
           });
        newAdmin.save()
        .then(() => SendMail(Email, validString, "admins"))
        .then(() => res.status(200).json({ message:"Admin Added"}))
        .catch(err => res.status(400).json({ message:"Error : " +err}))
        }
  });
});

//Handle Admin login
router.route("/login").post((req, res, next) =>{
  passport.authenticate("admin-local", function(err, admin, info) {
    if(err){ res.status(404).json({ message:"Some thing went wrong please try again"}) }
    if(admin){
      req.logIn(admin, (err) =>{
        if(err){
          res.json(err)
        }else{
          res.status(200).json({ message:"Loged in sucessed"})
        }
      })
    }else{
      res.status(401).json({message: info.message})
    }
    })(req, res, next);
});


router.route("/:id").get((req, res) => {
  console.log(req.params.id);
  Admin.findById(req.params.id)
  .then(admin => res.json(admin))
  .catch(err => res.status(400).json({message: "Error : " +err}))
})

router.route("/:id").delete((req, res) => {
  Admin.findByIdAndDelete(req.params.id)
  .then(() => res.json("Admin Deleted"))
  .catch(err => res.Status(400).json({message: "Error : " +err}))
})


//Handling email verfication
router.route("/verify/:ValidatorString").get( async (req, res) => {
  const validstring  = req.params.ValidatorString
  const admin = await Admin.findOne({validString: validstring })
  if(admin){
    if (admin.isValid == true) {
        res.json("Account is already verified")
    }else{
      admin.isValid = true
      admin.validString = ""
      await admin.save()
      .then(admin => NewAccountMail(admin.Email))
      .then(() => res.redirect("http://localhost:3001/"))
      .catch(err => res.status(400).json({message: "Something went wrong please try again"}))
    }
  }else{
    res.status(409).json({message: "Admin Not found"})
  }
})



router.route("/profile").get((req, res) => {
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

//Handle reset password request
router.route("/passwordreset").post( async (req, res) => {
  const Email = req.body.Email;
  const admin = await Admin.findOne({ "Email" : {
  $regex : new RegExp(Email, "i") } })

  const validString = randString();

  if(admin){
    admin.validString = validString;
    admin.save()
    .then(() => SendResetMail(Email, validString, "admins"))
    .then(() => res.json("Reset password email is sent"))
    .catch(err => res.status(400).json({ message:"Error : please try again"}))
  }else{
    res.json("Admin Not found")
  }
})

//Admin recive a link form email to this route to get approved and redirected
router.route("/resetpass/:validstring/:Email").get( async (req, res) => {

  const validstring = req.params.validstring;
  const Email = req.params.Email;

  const admin = await Admin.findOne({validString: validstring, "Email" : {
  $regex : new RegExp(req.body.Email, "i") }})

  if(admin){
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

  const admin = await Admin.findOne({validString: validstring, "Email" : {
  $regex : new RegExp(req.body.Email, "i") } })
  .then (async admin =>{
    if(!admin){
      return res.status(409).json( { message:"Invalid request"}) //--> Add error status so it can be handeld in front end proprley

  }
   else{
        const Password = await bcrypt.hash(req.body.Password1, 10);
        admin.Password = Password;
        admin.validString = "";
        admin.save()
      .then(() => SendCahngedEMail(Email, "admins"))
      .then(() => res.json({message: "Your Password is changed successfully"}))
      .catch(err => res.status(400).json({message: "Error something went wrong"}))
      }
});
})

router.post("/update/:id", upload.single('icon'), function(req, res) {
  Admin.findById(req.params.id)
  .then(async admin => {
    admin.FName = valuechick(admin.FName, req.body.FName);
    admin.LName = valuechick(admin.LName, req.body.LName);
    admin.Password = valuechick(admin.Password, req.body.Password);
    if(req.file != undefined){
      const result = await uploadFile(req.file)
      icon = result.key  
    }
    admin.save()
    .then(() => res.json("Admin Updated"))
    .catch(err => res.status(400).json({message: "Please try to update your account details again"}))
  })
  .catch(err => res.status(400).json({message: "Please try to update your account details again"}))
})


module.exports = router;
