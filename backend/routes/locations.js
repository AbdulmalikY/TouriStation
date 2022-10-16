const router = require("express").Router();
let Location = require("../models/Location.model");
const UserHolder = require("../Functions/HolderN.js");
const valuechick = require("../Functions/Validator.js");
const {IsOwner, IsAdmin, IsUser, IsGoogle} = require("../Functions/getUserType.js");




router.route("/").get((req, res) =>{
  IsAdmin(req._passport.session.user).then(function(result){
    Location.find()
       .then(Locations => res.json(Locations))
        .catch(err => res.Status(400).json({message: "Error : " +err}))
      })
    })

router.route("/add").post((req, res) =>{
  const Country = req.body.Country;
  const City = req.body.City;
  const Street = req.body.Street;
  const ZibCode = req.body.ZibCode;
  const GoogleMap = req.body.GoogleMap;


  const newLocation = new Location({
    Country,
    City,
    Street,
    ZibCode,
    GoogleMap,
  });

  newLocation.save()
  .then(locations => res.status(200).json("Location Added"))
  .catch(err => res.status(400).json({message: "Error: something went wrong"}))
});


router.route("/:id").get((req, res) => {
  console.log(req.params.id);
  Location.findById(req.params.id)
  .then(location => res.json(location))
  .catch(err => res.status(400).json({message: "Error: something went wrong"}))
})

router.route("/:id").delete((req, res) => {
  Location.findByIdAndDelete(req.params.id)
  .then(() => res.json("Location Deleted"))
  .catch(err => res.status(400).json({message: "Error: something went wrong"}))
})


router.route("/update/:id").post((req, res) => {
  Location.findById(req.params.id)
  .then(location => {
    location.Country = valuechick(location.Country, req.body.Country);
    location.City = valuechick(location.City, req.body.City);
    location.Street = valuechick(location.Street, req.body.Street);
    location.ZibCode = valuechick(location.ZibCode, req.body.ZibCode);
    location.GoogleMap = valuechick(location.GoogleMap, req.body.GoogleMap);

    location.save()
    .then(() => res.json({message: "Location Updated"}))
    .catch(err => res.status(400).json({message: "Error: something went wrong"}))
  })
  .catch(err => res.status(400).json({message: "Error: something went wrong"}))
})


module.exports = router;
