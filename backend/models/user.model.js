const mongoose = require("mongoose");
const passportLocalMongoose = require("passport-local-mongoose");
const findOrCreate = require("mongoose-findorcreate")

const Schema = mongoose.Schema;

const userSchema = new Schema({
// --> add google id
  FName: {
    type: String,
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
  //It is not required because users who sign up through google will not Enter
  //Users who use forms will not be able to register without password.
  Password: {
    type: String,
    // required: true,
    minlength: 8,
    maxlength: 250,
  },
  googleId:
 {
    type: String,
    trim: true,
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

userSchema.plugin(passportLocalMongoose, {usernameField: "Email"})
//  userSchema.plugin(findOrCreate)
userSchema.plugin(findOrCreate);
const User = mongoose.model("User", userSchema) ;

module.exports = User;
