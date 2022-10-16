let Owner = require("../models/Owner.model");
const {UserHolder, SiteHolder, araycount} = require("./HolderN.js");
let PlaceReq = require("../models/PlaceReq.model");
let Admin = require("../models/Admin.model");
let User = require("../models/user.model");
let Place = require("../models/Place.model");
let Category = require("../models/Category.model");
let objectid = require ("mongodb").ObjectID;
const {SendMail, SendResetMail, SendCahngedEMail, randString, NewAccountMail, DenyedAccount} = require("../Functions/EmailVerifcation.js");

const OwnerReq = require("../models/OwnerReq.model");




function OwnerCreate(ReqOwner)
{
//Used To handle owner new account request and returns the admin response

  switch (ReqOwner.Status) {
    case "Approved":

    AppOwner = new Owner ({
      FName: ReqOwner.FName,
      LName: ReqOwner.LName,
      Email: ReqOwner.Email,
      Password: ReqOwner.Password,
      icon: ReqOwner.icon,
    });

      
    AppOwner.save()
    .then(() => NewAccountMail(ReqOwner.Email))
    .then(() =>{
      OwnerReq.findByIdAndDelete(ReqOwner._id)
      .then(() => console.log("Owner Deleted"))
      .catch(err => res.status(400).json("Error: "+ err))
    })
    return "Owner Account request successfully Approved"
    break;

    case "Denied":

      DenyedAccount(ReqOwner.Email, ReqOwner.AdminDes)
      .then(() =>{
        OwnerReq.findByIdAndDelete(ReqOwner._id)
        .then(() => console.log("Owner Deleted"))
        .catch(err => res.status(400).json("Error: "+ err))
      })
    return "Owner Account request Denied"
    break;

    case "Pendding":
    return "Owner Account request is Pendding"
    break;

    default: return "The Status state is invalid"
  }
}




function PlaceEdit(place, id)
{
  // console.log(id);
  // console.log(id);

  function PlaceCatogiry (idd){
    return Category.findById(idd)
  }

  async function CatogryHandle(){
    try {
      let Places = await PlaceCatogiry(place.PlaceCategory)
        return(Places.CategoryName);
    } catch (err) {
        return err
  }
}



let isAdmin ;
Admin.countDocuments({_id: id}, function(err, count){
  console.log(count);
  if(count > 0){
    isAdmin = true;
 }
})

if(!id){
  console.log("asdfghjkl;");
}

let text
    if((place.PlaceOwner == id || place.PlaceAdmin == id || place.PlaceUser == id || isAdmin > 0) && id){

         text = Place.findById(place._id)
        .then(async places =>
          {
        place.save()
        return await CatogryHandle()})
      .then(catogry => text = "Your " + catogry + " information is updated")
      .catch(err => res.status(400).json("Error0 : " +err))


      return text
  }
  else
  {
     text = Place.findById(place._id)
    .then(async places =>
      {
    return await places.Name })
    .then(place => {return (text = "You dont have the premision to edit " + place)})
    .catch(err => res.status(400).json("Error0 : " +err))

    }
    return text

console.log(isAdmin);
  }


module.exports = {OwnerCreate, PlaceEdit};
