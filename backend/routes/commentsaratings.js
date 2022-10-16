const router = require("express").Router();
let Review = require("../models/CommentsARatings.model");
const {UserHolder, SiteHolder} = require("../Functions/HolderN.js");
const valuechick = require("../Functions/Validator.js");
const {IsOwner, IsAdmin, IsUser, IsGoogle} = require("../Functions/getUserType.js");


router.route("/").get((req, res) =>{

  // IsAdmin(req._passport.session.user).then(function(result){
    Review.find()
       .then(Reviewes => res.json(Reviewes))
       .catch(err => res.status(400).json({message: "Error: "+ err}))
      // })
    })




router.route("/add").post((req, res) =>{
  // if(req._passport.session == undeifned){
  //   return res.status(401).json( { message:"You are not uthorized  Please login"}) //--> Add error status so it can be handeld in front end proprley
  // }

  console.log(req.body);
  
  const Comment = req.body.Comment;
  const Rating = req.body.Rating;
  const ReviewUser = req.body.User;
  const ReviewOwner = req.body.Owner;
  const ReviewAdmin = req.body.Admin;
  const ReviewPlace = req.body.Place;
  const ReviewEvent = req.body.Event;
  let Reviewsite;
  let Author;
  let Icon;
  
  




  if(Comment && !Rating){
    res.status(400).json({message: "please provide a rating"})
  }



  const newreview = new Review({
    Comment,
    Rating,
    ReviewOwner,
    ReviewUser,
    ReviewAdmin,
    ReviewPlace,
    ReviewEvent,
    // Author,
    // Reviewsite,
    // Icon,
   })  

  let holder =  UserHolder(ReviewUser, ReviewOwner, ReviewAdmin);
  let site = SiteHolder(ReviewPlace, ReviewEvent);


  let reviewhold = '';

  switch (holder.holder) {
    case "User":
      reviewhold = "ReviewUser";
      break;

      case "Admin":
        reviewhold = "ReviewAdmin";
        break;

        case "Owner":
          reviewhold = "ReviewOwner";
          break;
    default: console.log("There is a proplem");
      break;
  }
  let ismatch = false;
  console.log(holder.id);
  Review.find({"ReviewUser": holder.id})
    .then (resp =>{

      // console.log(resp)
      // if(resp.ReviewPlace == undefined){
      //   for
      //   if(resp.ReviewEvent.includes(site.id)) { res.status(409).json({message: "You have a rating in this place"})}} 
      //   else{ if(resp.ReviewPlace.includes(site.id)) { res.status(409).json({message: "You have a rating in this place"})}}
      if(site.holder == "Place"){
      for (let i = 0; i < resp.length; i++) {
        if(resp[i].ReviewPlace == site.id) {
          ismatch = true;
          res.status(409).json({message: "You have a rating in this place"})
          break;
        }
      }
    }
    if(site.holder == "Event"){
      for (let i = 0; i < resp.length; i++) {
        if(resp[i].ReviewEvent == site.id) {
          ismatch = true;
          res.status(409).json({message: "You have a rating in this place"})
          break;
        }   
      }
    }
      if(ismatch == false){
          holder.Type.findById(holder.id)
            .then(result => {
            result.Reviews.push(newreview)
            newreview.Author = (result.FName +" "+ result.LName)
            result.save()
            return site.Type.findById(site.id);
          })
          .then(result => {  
            result.Reviews.push(newreview)
            if(result.Reviews.length == 0){
              result.Rating = Rating;
            }else{
              let RateValue = 0
              for (let i = 0; i < result.Reviews.length; i++) {
                Review.findById(result.Reviews[i])
                .then(result => RateValue = RateValue + result.Rating)
              }
              result.Rating =  (RateValue / result.Reviews.length)

            }
          newreview.Reviewsite =  result.Name;
          newreview.Icon = result.icon;
          result.save()
          })
          .then(() => newreview.save())
          .then(() => res.status(200).json({message: holder.holder + ", "+site.holder + " Review Added"}))
          .catch(err => res.status(400).json({message: "Error: something was wrong"}))
        }      
  });
  
});

router.route("/:id").get((req, res) => {
  Review.findById(req.params.id)
  .then(review => res.json(review))
  .catch(err => res.status(400).json({message: "Error: something was wrong"}))
})

router.route("/:id").delete((req, res) => {
  Review.findByIdAndDelete(req.params.id)
  .then(() => res.json("Review Deleted"))
  .catch(err => res.status(400).json({message: "Error: something was wrong"}))
})

//For now it wont be accessed but made for future use
router.route("/update/:id").post((req, res) => {
  Review.findById(req.params.id)
  .then(review => {
    review.Comment = valuechick(review.Comment, req.body.Comment);
    review.Rating = valuechick(review.Rating, req.body.Rating);

    review.save()
    .then(() => res.json("Review Updated"))
.catch(err => res.status(400).json({message: "Error: "+ err}))
  })
  .catch(err => res.status(400).json({message: "Error: "+ err}))})


module.exports = router;
