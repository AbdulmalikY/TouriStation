const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const categorySchema = new Schema({

  CategoryName:
  {
    type: String,
    unique: true,
    required: true,

  },
  CatoType: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Type"
    }
  ],
  CategoryPlaces:
  [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Place"
    }
  ],

},
  {
  timestamps: false,
});

const Category = mongoose.model("Category", categorySchema) ;

module.exports = Category;
