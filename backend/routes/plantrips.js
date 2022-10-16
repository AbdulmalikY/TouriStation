const router = require("express").Router();
let Plan = require("../models/PlanTrip.model");
const {UserHolder, SiteHolder} = require("../Functions/HolderN.js");
const valuechick = require("../Functions/Validator.js");
const {IsOwner, IsAdmin, IsUser, IsGoogle} = require("../Functions/getUserType.js");


router.route("/").get((req, res) =>{
  // IsAdmin(req._passport.session.user).then(function(result){
    Plan.find()
       .then(Plan => res.json(Plan))
       .catch(err => res.Status(400).json({message: "Error : " +err}))
// })
})
    


router.route("/:trip").get((req, res) =>{
    Plan.find({PlanName: req.params.trips})
      .then(Plan => res.json(Plan))
      .catch(err => res.Status(400).json({message: "Error : " +err}))
})

router.route("/add").post((req, res) =>{
  const PlanName = req.body.PlanName;
  const TripUser = req.body.User;
  const TripOwner = req.body.Owner;
  const TripAdmin = req.body.Admin;
  const TripPlaces1 = req.body.Place1;
  const TripPlaces2 = req.body.Place2;
  const TripPlaces3 = req.body.Place3;
  const TripPlaces4 = req.body.Place4;
  const TripPlaces5 = req.body.Place5;
  const TripEvent1 = req.body.Event1;
  const TripEvent2 = req.body.Event2;
  const TripEvent3 = req.body.Event3;
  const TripEvent4 = req.body.Event4;
  const StartDate = Date.parse(req.body.SDate);
  const EndDate = Date.parse(req.body.EDate);


  const newPlan = new Plan({
    PlanName,
    TripUser,
    TripOwner,
    TripPlaces:
    [
      TripPlaces1,
      TripPlaces2,
      TripPlaces3,
      TripPlaces4,
      TripPlaces5,
    ],
    TripEvent:
    [
      TripEvent1,
      TripEvent2,
      TripEvent3,
      TripEvent4,
    ],
    StartDate,
    EndDate,
  });
let holder =  UserHolder(TripUser, TripOwner, TripAdmin)

    newPlan.save()
  .then(result => {
    return holder.Type.findById(holder.id)
    })
  .then(result => {
      result.Trips.push(newPlan)
      result.save()
    })
  .then(result => res.json(holder.holder + " Plan Added"))
  .catch(err => res.status(400).json("Error : " +err))

});


router.route("/:id").get((req, res) => {
  console.log(req.params.id);
  Plan.findById(req.params.id)
  .then(plan => res.json(plan))
  .catch(err => res.status(400).json("Error: "+ err))
})

router.route("/:id").delete((req, res) => {
  Plan.findByIdAndDelete(req.params.id)
  .then(() => res.json("Plan Deleted"))
  .catch(err => res.status(400).json("Error: "+ err))
})


router.route("/update/:id").post((req, res) => {
  Plan.findById(req.params.id)
  .then(plan => {
    plan.PlanName= valuechick(plan.PlanName, req.body.PlanName);
    plan.TripPlaces.set(0, valuechick(plan.TripPlaces[0], req.body.Place1));
    plan.TripPlaces.set(1, valuechick(plan.TripPlaces[1], req.body.Place2));
    plan.TripPlaces.set(2, valuechick(plan.TripPlaces[2], req.body.Place3));
    plan.TripPlaces.set(3, valuechick(plan.TripPlaces[3], req.body.Place4));
    plan.TripPlaces.set(4, valuechick(plan.TripPlaces[4], req.body.Place5));
    plan.TripEvent.set(0, valuechick(plan.TripEvent[0], req.body.Event1));
    plan.TripEvent.set(1, valuechick(plan.TripEvent[1], req.body.Event2));
    plan.TripEvent.set(2, valuechick(plan.TripEvent[2], req.body.Event3));
    plan.TripEvent.set(3, valuechick(plan.TripEvent[3], req.body.Event4));
    plan.StartDate= valuechick(plan.StartDate, req.body.SDate);
    plan.EndDate= valuechick(plan.EndDate, req.body.EDate);

// console.log("New One: " +plan.TripEvent[0]);
// console.log(req.body.Place1);
    plan.save()
    .then(() => res.json("Plan Updated"))
    .catch(err => res.status(400).json("Error : " +err))
  })
  .catch(err => res.status(400).json("Error: "+ err))
})


module.exports = router;
