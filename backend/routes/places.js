const router = require("express").Router();
const Place = require("../models/Place.model");
const Owner = require("../models/Owner.model");
const Location = require("../models/Location.model");
const multer  = require("multer");
const Category = require("../models/Category.model");
const {UserHolder, SiteHolder, araycount} = require("../Functions/HolderN.js");
const upload = require("../Functions/images.js");
const valuechick = require("../Functions/Validator.js");
const {OwnerCreate, PlaceEdit} = require("../Functions/requestHandlre.js");
const {IsOwner, IsAdmin, IsUser, IsGoogle} = require("../Functions/getUserType.js");
let Event = require("../models/Event.model");
const { uploadFile, getFileStream } = require("../config/s3");
const Review = require("../models/CommentsARatings.model");




router.route("/").get((req, res) =>{
  Place.find()
  .then(places => res.json(places))
  .catch(err => res.Status(400).json({message: "Error : " +err}))
});

router.route("/Search/:place").get((req, res) =>{
  let FoundPlaces = []
  let FavoriteEvents = []
  Place.find()
  .then(places => {
    places.forEach(place => {
    if(place.Name.includes(req.params.place)){
      FoundPlaces.push(place)
      console.log("yes")
  }
}) 
  return Event.find()
})
  .then(events => {
    events.forEach(event => {
      if(event.Name.includes(req.params.place)){
       FavoriteEvents.push(event)
      }
    })
  })
  .then(() => res.json({
    places: FoundPlaces,
    Events: FavoriteEvents
  }))
  .catch(err => res.Status(400).json({message: "Error : " +err}))
});


router.route("/one/:place").get((req, res) =>{
  let FoundReviews = []
  let placeinfo = []
  let locationinfo = []


  Place.findOne({Name: req.params.place})
.then(place => {
  if(!place){
    return res.status(404).json({message: "No Place Found"})
  }else{
    placeinfo = place
    return Location.findById(place.PlaceLocation)
    .then(location =>{
      locationinfo = location 
      return Review.find({"ReviewPlace": placeinfo._id})
    }).then(reviews => FoundReviews = reviews)
    .then(() => {
      res.json({
      PlaceInformation: placeinfo,
      PlaceLocation: locationinfo,
      PlaceReviews: FoundReviews,
    })})
  }
})
 .catch(err => res.status(400).json({message: "Error : " +err}))
});


router.route("/sections/:catogry").get((req, res) =>{
  Category.find({CategoryName: req.params.catogry})
  .then(catogry => { return catogry[0]._id })
  .then( catogryId => {
    console.log(catogryId);
  Place.find({PlaceCategory: catogryId})
  .then(places => res.json(places))
  .catch(err => res.Status(400).json({message: "Error : " +err}))
    }
  )
});

router.post("/add", upload.array("icon", 8), function (req, res) {
  //TODO:: send id from front

  //  admin = '';
console.log("test")
  let owner;

  if (req._passport.session == undefined) {
    return res
      .status(401)
      .json({ message: "You are not uthorized  Please login" }); //--> Add error status so it can be handeld in front end proprley
  }

  IsUser(req._passport.session.user).then(function (result) {
    if (result == true) {
      return res
        .status(401)
        .json({ message: "You are not uthorized  Please login" }); //--> Add error status so it can be handeld in front end proprley
    }
  });

  const Name = req.body.Name;
  const Description = req.body.Description;
  const Phone = req.body.Phone;
  const Website = req.body.Website;
  const Instgram = req.body.Instgram;
  const Twitter = req.body.Twitter;
  const PRating = req.body.PRating;
  const Rating = 0;

  const Type1 = req.body.Type1;
  const Type2 = req.body.Type2;
  const Type3 = req.body.Type3;

  const OpenTime = req.body.OpenTime;
  const CloseTime = req.body.CloseTime;
  let icon;
  let photos;

  if (req.files[0] == undefined) {
    icon = "uploads/DefaultIcon.jpg";
  } else {
    icon = req.files[0].filename;
    photos = [];
    araycount(photos, req.files);
  }

  const PlaceCategory = req.body.Catogry;
  const PlaceOwner = req.body.Owner;
  const PlaceUser = req.body.User;
  const PlaceAdmin = req.body.Admin;

  const City = req.body.City;
  const Street = req.body.Street;
  const ZibCode = req.body.ZibCode;
  const GoogleMap = req.body.GoogleMap;

  const newLocation = new Location({
    City,
    Street,
    ZibCode,
    GoogleMap,
  });

  newLocation.save();
  const PlaceLocation = newLocation.id;

  const newPlace = new Place({
    Name,
    Description,
    Phone,
    Website,
    Instgram,
    Twitter,
    PRating,
    Rating,
    Type1,
    Type2,
    Type3,
    icon,
    photos,
    OpenTime,
    CloseTime,
    PlaceCategory,
    PlaceOwner,
    PlaceUser,
    PlaceAdmin,
    PlaceLocation,
  });

  if (!Name || !Description || !PlaceCategory) {
    return res.status(400).json({ message: "Please Fill all mandtory values" });
  }

  if (isNaN(Phone)) {
    return res
      .status(400)
      .json({ message: "The Phone number should only be numbers" });
  }

  if (Name.length < 2) {
    return res
      .status(401)
      .json({ message: "Place Name must be at least 2 charecters" });
  }

  Place.findOne({
    Name: {
      $regex: new RegExp(req.body.Name, "i"),
    },
  }).then((place) => {
    if (place && Name != undefined) {
      return res.status(409).json({
        message: "The Place with: " + Name + " already exisit in the website",
      });
    } else {
      let holder = UserHolder(PlaceUser, PlaceOwner, PlaceAdmin);

      newPlace
        .save()
        // .then(() => res.json("saved"))
        .then((result) => {
          return holder.Type.findById(holder.id);
        })
        .then((result) => {
          result.Places.push(newPlace);
          result.save();
          return Category.findById(PlaceCategory);
        })
        .then((result) => {
          result.CategoryPlaces.push(newPlace);
          result.save();
        })
        .then((result) =>
          res.status(200).json({ message: Name + " Place Added" })
        )
        //  .catch(err => res.status(400).json({message: "Error : " +err}))
        .catch((err) => console.log(err));
    }
  });
});

router.route("/:id").get((req, res) => {
  // console.log(req.params.id);
  Place.findById(req.params.id)
  .then(place => res.json(place))
  .catch(err => res.Status(400).json({message: "Error : " +err}))
})

router.route("/:id").delete((req, res) => {
  Place.findByIdAndDelete(req.params.id)
  .then(() => res.json("Place Deleted"))
  .catch(err => res.Status(400).json({message: "Error : " +err}))
})


router.post('/update/:id', upload.single('icon'), function(req, res) {
  Place.findById(req.params.id)

  .then(place => {
    place.Name = valuechick(place.Name, req.body.Name);
    place.Description = valuechick(Place.Description, req.body.Description);
    place.Phone = valuechick(place.Phone, req.body.Phone);
    place.Website = valuechick(place.Website, req.body.Website);
    place.Instgram = valuechick(place.Instgram, req.body.Instgram);
    place.Twitter = valuechick(place.Twitter, req.body.Twitter);
    place.Wifi = valuechick(place.Wifi, req.body.Wifi);
    place.Partition = valuechick(place.Partition, req.body.Partition);
    place.Music = valuechick(place.Music, req.body.Music);
    if(req.file != undefined){
      event.icon  = valuechick(event.icon, req.file.path)
    }

    const returnStatment = PlaceEdit(place, req.body.id)
    returnStatment.then(function(result){
    res.json(result)
    })

  })
  .catch(err => res.Status(400).json({message: "Error : " +err}))
})

// router.route("/Isfavorite/:place").get((req, res) => {
//   Place.findById(req.params.place)
//   .then(place => if(place))
//   .catch(err => res.Status(400).json({message: "Error : " +err}))
// })



module.exports = router;