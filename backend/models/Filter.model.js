const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const filterSchema = new Schema({

  FName: {
    type: String,
    required: true,
    unique: true
  },
  FValue: {
    type: String,
  },
},
  {
  timestamps: false,
});

const Filter = mongoose.model("Filter", filterSchema) ;

module.exports = Filter;
