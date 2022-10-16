//jshint esversion:6
const express = require("express");
const router = require("express").Router();
const multer = require("multer");
const fileUpload = require("express-fileupload");
const session = require("express-session");
const passport = require("passport");
const cookieParser = require("cookie-parser");
const bcrypt = require("bcryptjs");
require("dotenv").config();
const cors = require("cors");
const path = require("path");
const ejs = require("ejs");
const {
  IsOwner,
  IsAdmin,
  IsUser,
  IsGoogle,
} = require("./Functions/getUserType.js");
const { uploadFile, getFileStream } = require("./config/s3");

const mongoose = require("mongoose");
mongoose.set("useNewUrlParser", true);
mongoose.set("useFindAndModify", false);
mongoose.set("useCreateIndex", true);

require("dotenv").config();

const app = express();
app.use(
  cors({
    origin: "http://localhost:3001",
    credentials: true,
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/uploads", express.static("uploads"));
app.set("view engine", "ejs");

//Data base uri --> Stored in .env file
const uri = process.env.ATLAS_URI;

//Data base connection
mongoose.connect(uri, { useUnifiedTopology: true });
const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB Connected Successfully");
});

app.get("/", function (req, res) {
  res.send("Hi");
});

// middleware
app.use(
  session({
    secret: "secretcode",
    resave: true,
    saveUninitialized: true,
  })
);
app.use(cookieParser("secretcode"));
app.use(passport.initialize());
app.use(passport.session());

//routes
const usersRouter = require("./routes/users");
const ownerRouter = require("./routes/owners");
const adminRouter = require("./routes/admins");
const placeRouter = require("./routes/places");
const eventRouter = require("./routes/events");
const categoryRouter = require("./routes/categorys");
const typeRouter = require("./routes/types");
const locationRouter = require("./routes/locations");
const requestsRouter = require("./routes/requests");
const planRouter = require("./routes/plantrips");
const favoriteRouter = require("./routes/favorites");
const reviewRouter = require("./routes/commentsaratings");

app.use("/Reviews", reviewRouter);
app.use("/favorites", favoriteRouter);
app.use("/1234567890", planRouter);
app.use("/requests", requestsRouter);
app.use("/locations", locationRouter);
app.use("/types", typeRouter);
app.use("/users", usersRouter);
app.use("/events", eventRouter);
app.use("/places", placeRouter);
app.use("/owners", ownerRouter);
app.use("/admins", adminRouter);
app.use("/categories", categoryRouter);

//S3 Bucket return objects

app.get("/images/:key", async (req, res) => {
  const key = req.params.key;
  const readStream = getFileStream(key);
  readStream.pipe(res);
});

//Passport configration
require("./config/passport")(passport);

app.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

app.get(
  "/auth/google/redirect",
  passport.authenticate("google", {
    failureRedirect: "http://localhost:3001/login",
  }),
  function (req, res) {
    // Successful authentication, redirect home.
    res.redirect("http://localhost:3001/");
  }
);

//chick if the request holder is authnticated successfully
app.get("/auth", (req, res) => {
  if (req.isAuthenticated()) {
    res.send("U R Authnticated");
  } else {
    res.send("U R N Authnticated");
  }
});

app.get("/IsLoged", function (req, res) {
  if (req.isAuthenticated()) {
    res.send(true);
  } else {
    res.send(false);
  }
});

app.get("/adminreigster", function (req, res) {
  if (req._passport.session == undefined) {
    return res.send(false);
  }

  IsAdmin(req._passport.session.user).then(function (result) {
    if (result == true) {
      res.send(true);
    } else {
      res.send(false);
    }
  });
});

//To get admin id if register
app.get("/isAdminregister", function (req, res) {
  if (req._passport.session == undefined) {
    return res.send(false);
  }

  IsAdmin(req._passport.session.user).then(function (result) {
    if (result == true) {
      res.send(req._passport.session.user);
    } else {
      res.send(false);
    }
  });
});

//To get Owner id if register
app.get("/isOwnerregister", function (req, res) {
  if (req._passport.session == undefined) {
    return res.send(false);
  }

  IsOwner(req._passport.session.user).then(function (result) {
    if (result == true) {
      res.send(req._passport.session.user);
    } else {
      res.send(false);
    }
  });
});

//chick if user
app.get("/isUserregister", function (req, res) {
  if (req._passport.session == undefined) {
    return res.send(false);
  }

  IsUser(req._passport.session.user).then(function (result) {
    if (result == true) {
      res.send(req._passport.session.user);
    } else {
      res.send(false);
    }
  });
});

app.get("/logout", (req, res) => {
  req.logout();
  res.redirect("http://localhost:3001/");
});

const PORT = process.env.PORT || 3000;

if (process.env.NODE_ENV === "production") {
  app.use(express.static("../clinet"));
}

//Localhost port 3000
app.listen(PORT, function () {
  console.log(`Server has started Successfully on port ${PORT}`);
});