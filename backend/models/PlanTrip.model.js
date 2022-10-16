const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const planSchema = new Schema({
//UID, PID, FID, EID
  PlanName:
  {
    type: String,
  },
  TripUser:
  {
    type: mongoose.Schema.Types.ObjectID,
    ref: "User"
  },
  TripOwner:
  {
    type: mongoose.Schema.Types.ObjectID,
    ref: "Owner"
  },
  TripPlaces:
  [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref:"Place",
    }
  ],
  TripEvent:
  [
    {
    type: mongoose.Schema.Types.ObjectId,
    ref:"Event",
    }
  ],
  StartDate:
  {
    type: Date,
  },
  EndDate:
  {
    type: Date,
  }
},
  {
  timestamps: true,
});

const Plan = mongoose.model("Plan", planSchema) ;

module.exports = Plan;
