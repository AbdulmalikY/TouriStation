const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const eventSchema = new Schema({
  Name: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 50,
    unique: true,
    required: true,
  },
  Description: {
    type: String,
    maxlength: 300,
  },
  Phone:{
    type: String,
    maxlength: 14,
    minlength: 8,
  },
  Website:{
    type: String,
  },
  Instgram:{
    type: String,
  },
  Twitter:{
    type: String,
  },
  ProvidedBy:{
    type: String,
  },
  PRating: {
    type: String,
  },
  Rating: {
    type: Number,
  },
  Rating: {
    type: Number,
  },
  STime:{
    type: Date,
    required: true,
  },
  ETime:{
    type: Date,
    required: true,
  },
  Music: {
    type: Boolean,
  },
  Art: {
    type: Boolean,
  },
  Games: {
    type: Boolean,
  },
  Food: {
    type: Boolean,
  },
  icon:{
    type: String
  },
  photos:
  [
    {
      type: String,
    }
  ],
  EventOwner:
  {
    type: mongoose.Schema.Types.ObjectID,
    ref: "Owner"
  },
  EventAdmin:
  {
    type: mongoose.Schema.Types.ObjectID,
    ref: "Admin"
  },
  EventLocation:
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

const Event = mongoose.model("Event", eventSchema) ;

module.exports = Event;
