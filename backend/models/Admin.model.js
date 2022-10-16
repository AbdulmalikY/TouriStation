const mongoose = require("mongoose");
const passport = require("passport");
const passportLocalMongoose = require("passport-local-mongoose");
const Schema = mongoose.Schema;

const AdminSchema = new Schema({

  FName: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 50,
  },
  LName: {
    type: String,
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
  icon:
  {
    type: String,
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
  Trips:
  [
    {
    type: mongoose.Schema.Types.ObjectId,
    ref:"Plan",
    }
  ],
  Reviews:
  [
    {
    type: mongoose.Schema.Types.ObjectId,
    ref:"Review",
    }
  ],
  Favorites:
  [
    {
    type: mongoose.Schema.Types.ObjectId,
    ref:"Favorite",
    }
  ],
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
},
  {
  timestamps: true,
});

AdminSchema.plugin(passportLocalMongoose, {usernameField: "Email"})

const Admin = mongoose.model("Admin", AdminSchema) ;


module.exports = Admin;
