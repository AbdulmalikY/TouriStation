const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const CommentsARatingSchema = new Schema({

  Comment: {
    type: String,
  },
  Rating:{
    type: Number,
  },
  ReviewOwner:
  {
    type: mongoose.Schema.Types.ObjectID,
    ref: "Owner"
  },
  ReviewUser:
  {
    type: mongoose.Schema.Types.ObjectID,
    ref: "User"
  },
  ReviewAdmin:
  {
    type: mongoose.Schema.Types.ObjectID,
    ref: "User"
  },
  ReviewPlace:
  {
    type: mongoose.Schema.Types.ObjectID,
    ref: "Place"
  },
  ReviewEvent:
  {
    type: mongoose.Schema.Types.ObjectID,
    ref: "Event"
  },
  Reviewsite:
  {
    type: String
  },
  Author:
  {
    type: String
  },
  Icon:
  {
    type: String,
  },

},
  {
  timestamps: false,
});

const Review = mongoose.model("Review", CommentsARatingSchema) ;

module.exports = Review;
