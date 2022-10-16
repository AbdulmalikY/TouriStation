const router = require("express").Router();
let Event = require("../models/Event.model");
let Location = require("../models/Location.model");
let Owner = require("../models/Owner.model");
const {UserHolder, SiteHolder, araycount} = require("../Functions/HolderN.js");
const valuechick = require("../Functions/Validator.js");
const upload = require("../Functions/images.js");
const {IsOwner, IsAdmin, IsUser, IsGoogle} = require("../Functions/getUserType.js");
const Review = require("../models/CommentsARatings.model");
const { uploadFile, getFileStream } = require("../config/s3");



// TODO: Need to match between the add request and update request and remove the upload.
//TODO: Need to create The aray of photos and first photo and give index 0 the icon and the rest will be added to event photos


router.route("/").get((req, res) =>{
    Event.find()
       .then(events => res.json(events))
        .catch(err => res.status(400).json("Error : " +err))
})
    

router.post('/add', upload.array('icon', 8), async function(req, res) {
  console.log("test")
  console.log(req.files);

  const Name = req.body.Name;
  const Description = req.body.Description;
  const Phone = req.body.Phone;
  const Website = req.body.Website;
  const Instgram = req.body.Instgram;
  const Twitter = req.body.Twitter;
  const PRating = req.body.PRating;
  const ProvidedBy = req.body.ProvidedBy;
  const Rating = 0;
  //We can add duration
  const STime = req.body.STime;
  const ETime = req.body.ETime;

//Event Type One of them boolean
  const Music = req.body.Music;
  const Art = req.body.Art;
  const Games = req.body.Games;
  const Food = req.body.Food;


  if(req.files[0] == undefined){
    icon = "uploads/DefaultIcon.jpg"
 }else{
   const result = await uploadFile(req.files[0])
   icon = result.key
   photos = [];
  araycount(photos, req.files)
}
  const EventOwner = req.body.Owner;
  const EventAdmin = req.body.Admin;
  // const Country = req.body.Country;
  const City = req.body.City;
  const Street = req.body.Street;
  const ZibCode = req.body.ZibCode;
  const GoogleMap = req.body.GoogleMap;
  let EventUser;


  const newLocation = new Location({
    // Country,
    City,
    Street,
    ZibCode,
    GoogleMap,
  });

   newLocation.save()
   const EventLocation = newLocation.id


  const newEvent = new Event({
    Name,
    Description,
    Phone,
    Website,
    Instgram,
    Twitter,
    PRating,
    Rating,
    STime,
    ETime,
    Music,
    ProvidedBy,
    Art,
    Games,
    Food,
    icon,
    photos,
    EventOwner,
    EventAdmin,
    EventLocation, // We can create new location when new event is created or choise from a pariticular list
  });

  //Ensure all required fileds are filled
  if(!Name || !Description || !STime || !ETime){
    return res.status(400).json({message: "Please Fill all mandtory values"})
  }
  // Ensuring inputs are with reuired semantic 
  if (isNaN(Phone)){
    return res.status(401).json({message: "The Phone number should only be numbers"})
  }

  //Ensuring the names are unique
  if(Name){
      if (Name.length < 2 ){
        return res.status(401).json({message: "Event Name must be at least 2 charecters"})
      }
    }

  Event.findOne({ "Name" : {
  $regex : new RegExp(req.body.Name, "i") } })
 .then ( async event =>{
    if(event && Name != undefined){
      return res.status(409).json({message: "The Event with: " + Name + " already exisit in the website"})
    console.log(errors.length);
    }
      else{
        let holder =  UserHolder(EventUser, EventOwner, EventAdmin);

        newEvent.save()
        .then(result => {
        return holder.Type.findById(holder.id)
        })
      .then(result => {
          result.Events.push(newEvent)
          result.save()
        })
      .then(result => res.status(200).json({message: Name + " Event Added"}))
      .catch(err => res.status(400).json({message: "Error : something was wrong "}))
      }
    });
  });


router.route("/:id").get((req, res) => {
  console.log(req.params.id);
  Event.findById(req.params.id)
  .then(event => res.json(event))
  .catch(err => res.status(400).json({message: "Error: something went wrong"}))
})

router.route("/:id").delete((req, res) => {
  Event.findByIdAndDelete(req.params.id)
  .then(() => res.json("Event Deleted"))
  .catch(err => res.status(400).json({message: "Error: something went wrong"}))
})



router.route("/one/:event").get((req, res) =>{
  let FoundReviews = []
  let placeinfo = []
  let locationinfo = []
  Event.findOne({Name: req.params.event})
  .then(place => {
    if(!place){
      return  res.status(404).json({message: "No Place Found"})
    }else{

    }
    placeinfo = place
    return Location.findById(place.EventLocation)
    .then(location =>{
      locationinfo = location 
      return Review.find({"ReviewPlace": placeinfo._id})
    })
  
  .then(reviews => FoundReviews = reviews)
  .then(() => {
    res.json({
    PlaceInformation: placeinfo,
    PlaceLocation: locationinfo,
    PlaceReviews: FoundReviews,
  })})})
  .catch(err => console.log(err))
});

//TODO: Change the methode to view if icon or photos are updated.
router.post('/update/:id', upload.single('icon'), function(req, res) {
  Event.findById(req.params.id)

  // TODO: Refactor the code below
  .then(event => {
    event.Name = valuechick(event.Name, req.body.Name);
    event.Description = valuechick(event.Description, req.body.Description);
    event.Phone = valuechick(event.Phone, req.body.Phone);
    event.Website = valuechick(event.Website, req.body.Website);
    event.Instgram = valuechick(event.Instgram, req.body.Instgram);
    event.Twitter = valuechick(event.Twitter, req.body.Twitter);
    event.PRating = valuechick(event.PRating, req.body.PRating);
    event.STime = valuechick(event.STime, req.body.STime);
    event.ETime = valuechick(event.ETime, req.body.ETime);
    if(req.file != undefined){
      event.icon  = valuechick(event.icon, req.file.path)
    }

    event.save()
    .then(() => res.json({message: "Event Updated"}))
    .catch(err => res.status(400).json({message: "Error: something went wrong"}))
  })
  .catch(err => res.status(400).json({message: "Error: something went wrong"}))
})


module.exports = router;
