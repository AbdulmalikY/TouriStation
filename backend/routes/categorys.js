const router = require("express").Router();
let Category = require("../models/Category.model");
const valuechick = require("../Functions/Validator.js");
const {IsOwner, IsAdmin, IsUser, IsGoogle} = require("../Functions/getUserType.js");
let Type = require("../models/Type.model");




router.route("/").get((req, res) =>{
    let CategoryName= []
    let CategoryTypes = []
    
    Category.find()
       .then(Categories => {
         CategoryName.push(Categories)
        return Categories
        }).then(async CatgoriesTypes =>{

          for (let i = 0; i < CatgoriesTypes.length; i++) {
            // console.log(i);

            const currentcatogryName = CatgoriesTypes[i].CategoryName;
            // console.log(currentcatogryName);
            if(currentcatogryName != null){ CategoryName[i] = [currentcatogryName] }
  

            for (let j = 0; j < CatgoriesTypes[i].CatoType.length; j++) {
              // console.log( i + " -----> " +j);
              const result =  await Type.findOne({_id: CatgoriesTypes[i].CatoType[j]})
              if(result != null){
                CategoryName[i][j+1]= result
              }
            }
      }
        })
        .then(() =>{
          // console.log(CategoryName);
          res.json({
            "Catogries": CategoryName,

          })
        })
        .catch(err => console.log(err))
   })


router.route("/add").post((req, res) =>{

  const CategoryName = req.body.CategoryName;
  console.log(req.body.CategoryName)

  let errors = [];

  if(!CategoryName){
    return res.status(400).json({message: "The Category Name is not provided"})
  }
  if(!isNaN(CategoryName)){
    return res.status(401).json({message: "The Category Name should be a string"})
  }

  Category.findOne({ "CategoryName" : {
  $regex : new RegExp(req.body.CategoryName, "i") } })
 .then ( async catogry =>{
    if(catogry && CategoryName != undefined){
      return res.status(409).json({message: "The catogry with: " + CategoryName + " already exisit in the website"})
    console.log(errors.length);
    }
    
    else
      {
        const newCategory = new Category({
          CategoryName,
        });

        newCategory.save()
        .then(() => res.status(200).json({message: "Category Added"}))
        .catch(err => res.status(400).json({message: "Error : " +err}))
      }
    });
});


router.route("/:id").get((req, res) => {
  console.log(req.params.id);
  Category.findById(req.params.id)
  .then(category => res.json(category))
  .catch(err => res.status(400).json({message: "Error: "+ err}))
})

router.route("/:id").delete((req, res) => {
  Category.findByIdAndDelete(req.params.id)
  .then(() => res.json("Category Deleted"))
  .catch(err => res.status(400).json({message: "Error: "+ err}))
})


router.route("/update/:id").post((req, res) => {
  Category.findById(req.params.id)
  .then(category => {
    category.CategoryName = valuechick(category.CategoryName, req.body.CategoryName);

    category.save()
    .then(() => res.json("Category Updated"))
    .catch(err => res.status(400).json({message: "Error: "+ err}))
  })
  .catch(err => res.status(400).json({message: "Error: "+ err}))
})



module.exports = router;
