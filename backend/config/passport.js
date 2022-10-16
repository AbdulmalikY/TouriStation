const localStrategy = require("passport-local").Strategy;
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const findOrCreate = require("mongoose-findorcreate");
require("dotenv").config();



const User = require("../models/user.model");
const Owner = require("../models/Owner.model");
const Admin = require("../models/Admin.model");
const OwnerReq = require("../models/OwnerReq.model");



const {IsOwner, IsAdmin, IsUser, IsGoogle} = require("../Functions/getUserType.js");


//Pasport Authntication
module.exports = function (passport) {
  // User authntication for login
  // The fields are set by default from passport but we have diffretn filed
  passport.use("user-local",
    new localStrategy({
    usernameField: 'Email',
    passwordField: 'Password'
  },
  (Email, Password, done) => {
    // console.log(user.FName);
    //Search for userEmail ignoring the letter case
  
      User.findOne({ Email:{
        $regex : new RegExp(Email, "i") } }, (err, user) => {
        if (err) return done(null, false, {message: "Email or password is incorrect"});
        //User is not found return false --> No auth and redirected to failure
        if (!user) return done(null, false, {message: "Email or password is incorrect"});
        //User exist chick hashed pass and if match give auth with that id
        // if(user.isValid == false) return done(null, false, {message: "Please confirm your email"});
        bcrypt.compare(Password, user.Password, (err, result) => {
          if (err) done(null, false, {message: "Email or password is incorrect"});;
          if (result === true) {
            return done(null, user);
          } else {
            return done(null, false, {message: "Email or password is incorrect"});
          }
        });
      });
    })
  )

  // Owner authntication for login
  passport.use("owner-local",
    new localStrategy({
    usernameField: 'Email',
    passwordField: 'Password'
  },
  (Email, Password, done) => {
    console.log("Enters Owner");
    // console.log(user.FName);
      Owner.findOne({ Email:{
       $regex : new RegExp(Email, "i") } }, (err, owner) => {
        if (err)  return done(null, false, {message: "Email or password is incorrect"});
          if (!owner){
            OwnerReq.findOne({ Email:{
              $regex : new RegExp(Email, "i") } }, (err, ownerPenddin) =>{
                if(ownerPenddin){
                  return done(null, false, {message: "The owner account is pending"})
                }else{
                  return done(null, false, {message: "Email or password is incorrect"})
                }
              })
        }else{
        bcrypt.compare(Password, owner.Password, (err, result) => {
          if (err) return done(null, false, {message: "Email or password is incorrect"});
          if (result === true) {
            return done(null, owner);
          } else {
            return done(null, false, {message: "Email or password is incorrect"});
          }
        });
      }
      });
    })
  )


  // Admin authntication for login
  passport.use("admin-local",
    new localStrategy({
    usernameField: 'Email',
    passwordField: 'Password'
  },
  (Email, Password, done) => {
    console.log("Enters admin");
    // console.log(user.FName);
      Admin.findOne({ Email:{
        $regex : new RegExp(Email, "i") } }, (err, admin) => {
        if (err) return done(null, false, {message: "Email or password is incorrect"});
        if (!admin) { return done(null, false, {message: "Email or password is incorrect"}) } 
        else{
        // if(admin.isValid == false) return done(null, false, {message: "Please confirm your email"});
        bcrypt.compare(Password, admin.Password, (err, result) => {
          if (err) return done(null, false, {message: "Email or password is incorrect"});
          if (result === true) {
            return done(null, admin);
          } else {
            console.log("Dose Not Mach Password");
            return done(null, false, {message: "Email or password is incorrect"});
          }
        });
      }
      });
    })
  )

  passport.use("google", new GoogleStrategy({
    clientID: process.env.CLINETID,
    clientSecret: process.env.CLINETSECRET,
    callbackURL: "http://localhost:3000/auth/google/redirect",

  },
  function(accessToken, refreshToken, profile, cb) {

    User.findOne({ Email: profile.emails[0].value})
    .then(user =>{
      if(user.googleId == undefined){
        cb(null, false, {message: "That User is registerd"});
      }else{
        if(user){
          //if we already have a record with the given profile ID
          cb(null, user);
          }
          else
          {
            //if user is !found it will store the new user data in db and give auth.
            const newUser = new User({
    
              FName: profile.name.givenName,
              LName: profile.name.familyName,
              Email: profile.emails[0].value,
              googleId: profile.id,
    
            })
  
            newUser.save()
            .then((newUser) =>{
              cb(null, newUser);
            })
            .catch(err => console.log(err))
           }
      }
    })
    .catch(err => console.log(err))
    //Serach for the user in db and retrun info to give auth
    }
  )
);

//It will chick if it is form or google and return the expected id(_id, googleid)
  passport.serializeUser((user, cb) => {
    // console.log(user._id);
    cb(null, user.id);
  });
  passport.deserializeUser((id, cb) => {
// console.log(id);

//chick if it a google.
  IsGoogle(id).then(function(result){
  if(result){
    User.findOne({"googleId": id}, (err, user) => {
      cb(err, user);
    })
  }})

  // chick if the request is from a owner account
  IsOwner(id).then(function(result){
  if(result){
//We Added here log if he is an owenr
//The proplem faced is the if returns [object Promise] and that made each auth under the owner auth
    Owner.findById(id, (err, owner) => {
      cb(err, owner);
    })
  }})

  // chick if the request is from a admin account
  IsAdmin(id).then(function(result){
  if(result){
    Admin.findById(id, (err, admin) => {
      cb(err, admin);
    })
  }})

  // chick if the request is from a user account
  IsUser(id).then(function(result){
  if(result){
    User.findById(id, (err, user) => {
      cb(err, user);
    });
  }
  })

  });
};
