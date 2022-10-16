const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const placeSchema = new Schema({

  Name:
   {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 50,
    unique: true,
  },
  Description:
  {
    type: String,
    maxlength: 300,
  },
  Phone:
  {
    type: String,
    maxlength: 15,
    minlength: 8,
    unique: true,
  },
  Website:
  {
    type: String,

  },
  Instgram:
  {
    type: String,
  },
  Twitter:
  {
    type: String,
  },
  PRating:
  {
    type: String,
  },
  Rating:
   {
    type: Number,
  },
  icon:
  {
    type: String,
    required: true,
  },
  OpenTime:{
    type: String,
    min: 0, 
    max: 23
  },
  CloseTime:{
    type: String,
    min: 0, 
    max: 23
  },
  photos:
  [
    {
      type: String,
    }
  ],
  Type1:
   {
    type: Boolean,
  },
  Type2:
   {
    type: Boolean,
  },
  Type3:
   {
    type: Boolean,
  },
  PlaceCategory:
  {
    type: mongoose.Schema.Types.ObjectID,
    ref: "Category"
  },
  PlaceOwner:
  {
    type: mongoose.Schema.Types.ObjectID,
    ref: "Owner"
  },
  PlaceUser:
  {
    type: mongoose.Schema.Types.ObjectID,
    ref: "User"
  },
  PlaceAdmin:
  {
    type: mongoose.Schema.Types.ObjectID,
    ref: "Admin"
  },
  PlaceLocation:
  {
    type: mongoose.Schema.Types.ObjectID,
    ref: "Location"
  },
  Reviews:
  [
    {
      type: mongoose.Schema.Types.ObjectID,
      ref: "Review"
    },
  ],
},
  {
  timestamps: true,
});

const Place = mongoose.model("Place", placeSchema) ;

module.exports = Place;
