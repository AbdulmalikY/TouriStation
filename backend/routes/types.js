const router = require("express").Router();
let Type = require("../models/Type.model");
let Category = require("../models/Category.model")
const valuechick = require("../Functions/Validator.js");
const {IsOwner, IsAdmin, IsUser, IsGoogle} = require("../Functions/getUserType.js");


router.route("/").get((req, res) =>{
  Type.find()
  .then(types => res.json(types))
  .catch(err => res.Status(400).json("Error : " +err))
});

router.route("/add").post((req, res) =>{
  const TName = req.body.TName;
  const CatogryType = req.body.category;
  console.log(req.body)

  if(!TName || !CatogryType){
    return res.status(400).json({message: "Please Fill all mandtory values"})
  }

  const newType = new Type({
    TName,
    CatogryType,
  });

  newType.save()
  .then(result => {
  return Category.findById(CatogryType)
  })
  .then(categor => {
    categor.CatoType.push(newType)
    categor.save()
  })
  .then(result => res.json("Type Added"))
  .catch(err => res.Status(400).json({message: "Error : " +err}))


});

router.route("/").get((req, res) =>{
  Type.find()
  .then(types => res.json(types))
  .catch(err => res.Status(400).json("Error : " +err))
});


router.route("/addEvent").post((req, res) =>{
  const TName = req.body.TName;

  if(!TName ){
    return res.status(400).json({message: "Please Fill all mandtory values"})
  }
 
  const newType = new Type({
    TName,
  });

  newType.save()
  .then(result => {
    res.json("Type Added")
  })
  .catch(err => res.Status(400).json({message: "Error : " +err}))


});

router.route("/:id").get((req, res) => {
  console.log(req.params.id);
  Type.findById(req.params.id)
  .then(type =>{
    res.json(type)})
    .catch(err => res.Status(400).json({message: "Error : " +err}))
  })

router.route("/:id").delete((req, res) => {
  Type.findByIdAndDelete(req.params.id)
  .then(() => res.json("Type Deleted"))
  .catch(err => res.Status(400).json({message: "Error : " +err}))
})


//we can use the updateOne methode
//For Now Post and make ita for all varibles
router.route("/update/:id").post((req, res) => {
  Type.findById(req.params.id)
  .then(type => {
    type.TName = valuechick(type.TName, req.body.TName);
    type.save()
    .then(() => res.json("Type Updated"))
    .catch(err => res.Status(400).json({message: "Error : " +err}))
  })
  .catch(err => res.Status(400).json({message: "Error : " +err}))
})

module.exports = router;
