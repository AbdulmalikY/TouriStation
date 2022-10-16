const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const typeSchema = new Schema({

  TName:
  {
    type: String,
  },
  CatogryType:
  {
    type: mongoose.Schema.Types.ObjectID,
    ref: "Category"
  },
},
  {
  timestamps: false,
});

const Type = mongoose.model("Type", typeSchema) ;

module.exports = Type;
