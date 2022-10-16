const router = require("express").Router();
let Favorite = require("../models/Favorite.model");
let User = require("../models/user.model");
let Owner = require("../models/Owner.model");
const {UserHolder, SiteHolder} = require("../Functions/HolderN.js");
const {IsOwner, IsAdmin, IsUser, IsGoogle} = require("../Functions/getUserType.js");



router.route("/").get((req, res) =>{
  // IsAdmin(req._passport.session.user).then(function(result){
    Favorite.find()
       .then(Favorite => res.json(Favorite))
       .catch(err => res.status(400).json({message: "Error: something went wrong"}))
      // })
    })

    router.route("/add").post((req, res) =>{
      const FavoritePlace = req.body.Place;
      const FavoriteEvent = req.body.Event;
      let FavoriteUser ;
      let FavoriteOwner ;
      let FavoriteAdmin ;
      if(req._passport.session == undefined){
        return res.status(401).json( { message:"Please login to add your faviorte places"})}

      IsAdmin(req._passport.session.user).then(function(result){
        if (result == true){
          FavoriteUser = req._passport.session.user;
          // return req._passport.session.user;
          const newFavorite = new Favorite({
            FavoritePlace,
            FavoriteEvent,
            FavoriteAdmin
          });
    
          let holder =  UserHolder(FavoriteUser, FavoriteOwner, FavoriteAdmin)
          let Name;
          console.log(newFavorite);
          newFavorite.save()
          .then(result => {
              return holder.Type.findById(holder.id)
            })
          .then(result => {
                Name = result.FName;
                result.Favorites.push(newFavorite)
                result.save()
              })
            .then(() => res.status(200).json({message: Name + " New Favorite is Added"}))
            .catch(err => res.status(400).json({message: "Error: something went wrong"}))
        }
      })
      IsOwner(req._passport.session.user).then(function(result){
        if (result == true){
          FavoriteUser = req._passport.session.user;
          // return req._passport.session.user;
          const newFavorite = new Favorite({
            FavoritePlace,
            FavoriteEvent,
            FavoriteOwner
          });
    
          let holder =  UserHolder(FavoriteUser, FavoriteOwner, FavoriteAdmin)
          let Name;
          console.log(newFavorite);
          newFavorite.save()
          .then(result => {
              return holder.Type.findById(holder.id)
            })
          .then(result => {
                Name = result.FName;
                result.Favorites.push(newFavorite)
                result.save()
              })
            .then(() => res.status(200).json({message: Name + " New Favorite is Added"}))
            .catch(err => res.status(400).json({message: "Error: something went wrong"}))
        }
      })
      IsUser(req._passport.session.user).then((result) => {
        if (result == true){
          FavoriteUser = req._passport.session.user;
          // return req._passport.session.user;
          const newFavorite = new Favorite({
            FavoritePlace,
            FavoriteEvent,
            FavoriteUser
          });
    
          let holder =  UserHolder(FavoriteUser, FavoriteOwner, FavoriteAdmin)
          let Name;
          console.log(newFavorite);
          newFavorite.save()
          .then(result => {
              return holder.Type.findById(holder.id)
            })
          .then(result => {
                Name = result.FName;
                result.Favorites.push(newFavorite)
                result.save()
              })
            .then(() => res.status(200).json({message: Name + " New Favorite is Added"}))
            .catch(err => res.status(400).json({message: "Error: something went wrong"}))
        }
      })
    
});
    


router.route("/:id").get((req, res) => {
  console.log(req.params.id);
  Favorite.findById(req.params.id)
  .then(favorite => res.json(favorite))
  .catch(err => res.status(400).json({message: "Error: something went wrong"}))
})


router.route("/:id").delete((req, res) => {
  Favorite.findByIdAndDelete(req.params.id)
  .then(() => res.json({message: "Favorite Deleted"}))
  .catch(err => res.status(400).json({message: "Error: something went wrong"}))
})

router.route("/Isfavorite/:place").get((req, res) => {
  if(req._passport.session == undefined){
    return res.status(401).json ({message:" You are not authrized"})
  }
  Favorite.find({FavoritePlace: req.params.place, FavoriteUser: req._passport.session.user})
  .then(places => {
    let breakCondition = false;
    for (let i = 0; i < places.length; i++) {
      if(places[i].FavoritePlace == req.params.place){}
        breakCondition = true;
        // console.log(breakCondition);
        break;
    }
    return breakCondition;
    }
  )
  .then(response => res.send(response))
  .catch(err => console.log(err))
})

module.exports = router;