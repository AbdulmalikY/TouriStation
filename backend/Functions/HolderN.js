const { uploadFile, getFileStream } = require("../config/s3");


function UserHolder(User, Owner, Admin){
//Takes Three values and find which one is !Null, Used for features that involve all users types
let Hvalues = []

if (!User && !Owner && !Admin ) {
  return new Error("Thier should be a holder")
}else{
  if(User && Owner || User && Admin || Owner && Admin){
  return new Error("Thier should be only one holder")
  }
  if (User){
    Hvalues["holder"] = "User";
    Hvalues["id"] = User;
    Hvalues["Type"] = require("../models/user.model");


  }else{
    if (Admin){
      Hvalues["holder"] = "Admin";
      Hvalues["id"] = Admin;
      Hvalues["Type"] = require("../models/Admin.model");

    } else{
      Hvalues["holder"] = "Owner";
      Hvalues["id"] = Owner;
      Hvalues["Type"] = require("../models/Owner.model");

    }
  }

return Hvalues
  }

}

function SiteHolder(Place, Event){
// Takes place & Events values and return !Null value. Used for features that involve both ex, Comments.

let Svalues = []

if (!Place && !Event || Place && Event) {
  return new Error("Number of Site Holder should be one")
}
else
{
  if (Place)
  {
    Svalues["holder"] = "Place";
    Svalues["id"] = Place;
    Svalues["Type"] = require("../models/Place.model");
  }
  else
  {
    Svalues["holder"] = "Event";
    Svalues["id"] = Event;
    Svalues["Type"] = require("../models/Event.model");

  }

return Svalues
  }

}

function araycount(Aray, elemnts){

//Used to conunt num of images in req in events & places

  for (var i = 1; i < elemnts.length; i++) {
   
    const result = uploadFile(elemnts[i])
    Aray[i-1] = elemnts[i].filename;
  }

  return Aray
}



module.exports = {UserHolder, SiteHolder, araycount};
