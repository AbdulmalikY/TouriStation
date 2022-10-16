const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ownerSchema = new Schema({

  FName: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 50,
  },
  LName: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 50,
  },
  Email: {
    type: String,
    required: true,
    maxlength: 200,
    trim: true,
    unique: true
  },
  Password: {
    type: String,
    required: true,
    minlength: 8,
    maxlength: 250,
  },
  isValid:
  {
    type: Boolean,
  },
  validString:
  {
    type: String,
  },
  UserType:
  {
    type: String,
  },
  Events:
  [
    {
    type: mongoose.Schema.Types.ObjectId,
    ref:"Event",
    }
  ],
  Places:
  [
    {
    type: mongoose.Schema.Types.ObjectId,
    ref:"Place",
    }
  ],
  Reviews:
  [
    {
    type: mongoose.Schema.Types.ObjectId,
    ref:"Review",
    }
  ],
  Trips:
  [
    {
    type: mongoose.Schema.Types.ObjectId,
    ref:"Plan",
    }
  ],
  Favorites:
  [
    {
    type: mongoose.Schema.Types.ObjectId,
    ref:"Favorite",
    }
  ],
  icon:
  {
    type: String,
  },

},
  {
  timestamps: true,
});

const Owner = mongoose.model("Owner", ownerSchema) ;

module.exports = Owner;
