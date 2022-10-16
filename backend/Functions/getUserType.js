let Owner = require("../models/Owner.model");
let Admin = require("../models/Admin.model");
let User = require("../models/user.model");


// Function return a boolean if the entite is under owner or not
function IsOwner(obj)
{
  if(obj.charAt(0) == "1"){
    return false
  }else{

  function FOwner (id){
    return Owner.findById(id)
  }

async function HandleOwner(){
    try {
      let Owners = await FOwner(obj)
      if(Owners)
      return true;
      else{
        return false
      }
    }
    catch (err)
    {
      return err;
    }
  }

  //The function should be calles as a promise
  let IfOwner = Owner.findById(obj)
  .then(async owner =>
   {
     return await HandleOwner()
   })

 return IfOwner

}
}



// Function return a boolean if the entite is under admin or not
function IsAdmin(obj)
{
  function FAdmin (id){
    return Admin.findById(id)
  }

async function HandleAdmin(){
    try {
      let Admins = await FAdmin(obj)
      if(Admins)
      return true;
      else{
        return false
      }
    }
    catch (err)
    {
      return err;
    }
  }

  //The function should be calles as a promise
  let IfAdmin = Admin.findById(obj)
  .then(async admin =>
   {
     return await HandleAdmin()
   })

 return IfAdmin

}


// Function return a boolean if the entite is under user or not
function IsUser(obj)
{
  function FUser (id){
    return User.findById(id)
  }

async function HandleUser(){
    try {
      let Users = await FUser(obj)
      if(Users)
      return true;
      else{
        return false
      }
    }
    catch (err)
    {
      return err;
    }
  }

  //The function should be calles as a promise
  let IfUser = User.findById(obj)
  .then(async user =>
   {
     return await HandleUser()
   })

 return IfUser

}

// Function return a boolean if the entite is under user or not
function IsGoogle(obj)
{
  function FGoogle (id){
    return User.findOne({"googleId": obj})
  }

async function HandleGoogle(){
    try {
      let Users = await FGoogle(obj)
      if(Users)
      return true;
      else{
        return false
      }
    }
    catch (err)
    {
      return err;
    }
  }

  //The function should be calles as a promise
  let IfUser = User.findOne({"googleId": obj})
  .then(async user =>
   {
     return await HandleGoogle()
   })

 return IfUser

}

module.exports =  {IsOwner, IsAdmin, IsUser, IsGoogle};
