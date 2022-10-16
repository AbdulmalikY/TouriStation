const router = require("express").Router();
let Request = require("../models/Request.model");

router.route("/").get((req, res) =>{
  Request.find()
  .then(request => res.json(request))
  .catch(err => res.Status(400).json("Error : " +err))
});

router.route("/add").post((req, res) =>{
  const Reason = req.body.Reason;
  const Status = req.body.Status;

  const newRequest = new Request({
    Reason,
    Status,
  });

  newRequest.save()
  .then(request => res.json("Request Added"))
  .catch(err => res.Status(400).json({message: "Error : " +err}))
});


router.route("/:id").get((req, res) => {
  console.log(req.params.id);
  Request.findById(req.params.id)
  .then(request => res.json(request))
  .catch(err => res.Status(400).json({message: "Error : " +err}))
})

router.route("/:id").delete((req, res) => {
  Request.findByIdAndDelete(req.params.id)
  .then(() => res.json("Request Deleted"))
  .catch(err => res.Status(400).json({message: "Error : " +err}))
})


//we can use the updateOne methode
//For Now Post and make ita for all varibles
router.route("/update/:id").post((req, res) => {
  Request.findById(req.params.id)
  .then(request => {
    request.Reason = req.body.Reason;
    request.Status = req.body.Status;


    request.save()
    .then(() => res.json("Request Updated"))
    .catch(err => res.Status(400).json({message: "Error : " +err}))
  })
  .catch(err => res.Status(400).json({message: "Error : " +err}))
})


module.exports = router;
