const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const placeReqSchema = new Schema({


  Description:
  {
    type: String,
    maxlength: 300,
  },
  Phone:
  {
    type: String,
    maxlength: 12,
    minlength: 8,
  },
  Website:
  {
    type: String,
    maxlength: 50,
    minlength: 4,
  },
  Instagram:
  {
    type: String,
  },
  Twitter:
  {
    type: String,
  },
  photos:
  [
    {
      type: String,
    }
  ],
  Wifi:
   {
    type: Boolean,
  },
  Partition:
   {
    type: Boolean,
  },
  Music:
   {
    type: Boolean,
  }},
  {
  timestamps: true,
});

const PlaceReq = mongoose.model("PlaceReq", placeReqSchema) ;

module.exports = PlaceReq;
