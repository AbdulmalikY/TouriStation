const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const locationSchema = new Schema({

  Country: {
    type: String,
  },
  City: {
    type: String,
  },
  Street: {
    type: String,
  },
  ZibCode: {
    type: Number,
  },
  GoogleMap: {
    type: String,
  },
},
  {
  timestamps: false,
});




const Location = mongoose.model("Location", locationSchema) ;

module.exports = Location;
