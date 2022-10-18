const router = require("express").Router();
let User = require("../models/user.model");
const multer = require("multer");
const valuechick = require("../Functions/Validator.js");
const upload = require("../Functions/images.js");
const {
  SendMail,
  SendResetMail,
  SendCahngedEMail,
  randString,
  NewAccountMail,
} = require("../Functions/EmailVerifcation.js");
const bcrypt = require("bcryptjs");
const passport = require("passport");
const {
  IsOwner,
  IsAdmin,
  IsUser,
  IsGoogle,
} = require("../Functions/getUserType.js");
const Review = require("../models/CommentsARatings.model");
const Place = require("../models/Place.model");
const Favorite = require("../models/Favorite.model");
const { uploadFile, getFileStream } = require("../config/s3");

// retrive all users data
//--> Delete it
router.route("/").get((req, res) => {
  IsAdmin(req._passport.session.user).then(function (result) {
    User.find()
      .then((users) => res.json(users))
      .catch((err) => res.Status(400).json({ message: "Error : " + err }));
  });
});

//Handle User register
router.post("/register", upload.single("icon"), function (req, res) {
  const FName = req.body.FName;
  const LName = req.body.LName;
  const Email = req.body.Email;
  const Password1 = req.body.Password1;
  const Password2 = req.body.Password2;
  const isValid = false;
  const validString = randString();
  const UserType = "user";
  let icon;

  if (req.file == undefined) {
    icon = "uploads/DefaultIcon.jpg";
  } else {
    icon = req.file.path;
  }

  //chick if the mandtory inputs are filled
  if (!FName || !Email || !Password1 || !Password2) {
    return res.status(400).json({ message: "Please Fill all mandtory values" }); //--> Add error status so it can be handeld in front end proprley
  }

  //Match password
  if (Password1 != Password2) {
    return res.status(401).json({ message: "Passwords do not match" });
  }

  //Chick password strength
  if (Password1.length < 8) {
    return res
      .status(401)
      .json({ message: "Password Must be at least 8 charecters" });
  }

  //chick if email already exisit
  User.findOne({
    Email: {
      $regex: new RegExp(req.body.Email, "i"),
    },
  }).then(async (user) => {
    if (user && Email != undefined) {
      return res
        .status(409)
        .json({ message: "The User with: " + Email + " is registerd" });
    } else {
      const Password = await bcrypt.hash(req.body.Password1, 10);
      console.log("It is true");
      const newUser = new User({
        FName,
        LName,
        Email,
        Password,
        isValid,
        validString,
        icon,
        UserType,
      });
      newUser
        .save()
        .then(() => res.status(200).json("User Added"))
        .catch((err) => res.status(400).json("Error : " + err));
    }
  });
});

//Handle User login
router.route("/login").post((req, res, next) => {
  passport.authenticate("user-local", function (err, user, info) {
    if (err) {
      res.status(404).json({ message: "wrong Email or Password" });
    }
    if (user) {
      req.logIn(user, (err) => {
        if (err) {
          res
            .status(400)
            .json({ message: "Something went wrong please try again" });
        } else {
          res.status(200).json({ message: "Loged in sucessed" });
        }
      });
    } else {
      res.status(401).json({ message: "wrong Email or Password" });
    }
  })(req, res, next);
});

//Handling email verfication
router.route("/verify/:ValidatorString").get(async (req, res) => {
  const validstring = req.params.ValidatorString;
  console.log("1");
  const user = await User.findOne({ validString: validstring });
  if (user) {
    if (user.isValid == true) {
      res.json("Account is already verified");
    } else {
      user.isValid = true;
      user.validstring = "";
      await user
        .save()
        .then((user) => NewAccountMail(user.Email))
        .then(() => res.json("Verfied successfully"))
        .catch((err) =>
          res
            .status(400)
            .json({ message: "Something went wrong please try again" })
        );
    }
  } else {
    res.status(409).json({ message: "User Not found" });
  }
});

//Google Auth

router.route("/auth/google").get((req, res) => {
  passport.authenticate("google", { scope: ["profile", "email"] });
});

// Google auth callback
router.route("/auth/google/redirect").get((req, res) => {
  passport.authenticate("google", {
    successRedirect: "/admins",
    failureRedirect: "/login",
  });
});

router.route("/profile").get((req, res) => {
  if (req._passport.session == undefined) {
    return res
      .status(401)
      .json({ message: "You are not uthorized Please login" });
  }

  let data = [];
  let reviews = [];
  let faviortes = [];

  let faviortesP = [];

  User.findById(req._passport.session.user)
    .then((user) => {
      data.push(
        user.FName,
        user.LName,
        user.icon,
        user.Email,
        user._id,
        user.createdAt
      );
      return Review.find({ ReviewUser: req._passport.session.user });
    })
    .then((resreviews) => {
      reviews = resreviews;
      return Favorite.find({ FavoriteUser: req._passport.session.user });
    })
    .then(async (UserFaviorte) => {
      // console.log(UserFaviorte.length);
      faviortes = UserFaviorte;
      for (let index = 0; index < UserFaviorte.length; index++) {
        const result = await Place.findOne({
          _id: UserFaviorte[index].FavoritePlace,
        });
        if (result != null) {
          faviortesP.push(result);
        }
      }
    })

    .then(() => {
      // console.log(faviortes);
      res.json({
        User: data,
        UserReviews: reviews,
        UserFaviorte: faviortesP,
      });
    })
    .catch((err) => console.log(err));
});

router.route("/:id").delete((req, res) => {
  User.findByIdAndDelete(req.params.id)
    .then(() => res.json("User Deleted"))
    .catch((err) => res.Status(400).json({ message: "Error : " + err }));
});

//we can use the updateOne methode
//For Now Post and make ita for all varibles
router.post("/update/:id", upload.single("icon"), function (req, res) {
  User.findById(req.params.id)
    .then(async (user) => {
      user.FName = valuechick(user.FName, req.body.FName);
      user.LName = valuechick(user.LName, req.body.LName);
      user.Password = valuechick(user.Password, req.body.Password);
      if (req.file != undefined) {
        const result = await uploadFile(req.file);
        icon = result.key;
      }

      user
        .save()
        .then(() => res.json("User Updated"))
        .catch((err) => res.Status(400).json({ message: "Error : " + err }));
    })
    .catch((err) => res.Status(400).json({ message: "Error : " + err }));
});

//Handle reset password request
router.route("/passwordreset").post(async (req, res) => {
  const Email = req.body.Email;
  const user = await User.findOne({
    Email: {
      $regex: new RegExp(Email, "i"),
    },
  });

  const validString = randString();

  if (user) {
    user.validString = validString;
    user
      .save()
      .then(() => SendResetMail(Email, validString, "U"))
      .then(() => res.json("Reset password email is sent"))
      .catch((err) =>
        res.status(400).json({ message: "Error : please try again" })
      );
  } else {
    res.json("User Not found");
  }
});

//user recive a link form email to this route to get approved and redirected
router.route("/resetpass/:validstring/:Email").get(async (req, res) => {
  const validstring = req.params.validstring;
  const Email = req.params.Email;

  const user = await User.findOne({
    validString: validstring,
    Email: {
      $regex: new RegExp(req.body.Email, "i"),
    },
  });

  if (user) {
    res.json(true);
  } else {
    return res.status(400).json({ message: "You are not authorized" });
  }
});

router.route("/resetpass/:validstring/:Email").post(async (req, res) => {
  const password1 = req.body.Password1;
  const password2 = req.body.Password2;

  const validstring = req.params.validstring;
  const Email = req.params.Email;

  if (!password1 || !password2) {
    return res.status(400).json({ message: "Please Fill all mandtory values" });
  }

  if (password1.length < 8) {
    return res
      .status(400)
      .json({ message: "password must be at least 8 charecters" }); //--> Add error status so it can be handeld in front end proprley
  }

  if (password1 != password2) {
    return res.status(400).json({ message: "Passwords do not match" });
  }

  const user = await User.findOne({
    validString: validstring,
    Email: {
      $regex: new RegExp(req.body.Email, "i"),
    },
  }).then(async (user) => {
    if (!user) {
      return res.status(409).json({ message: "Invalid request" }); //--> Add error status so it can be handeld in front end proprley
    } else {
      const Password = await bcrypt.hash(req.body.Password1, 10);
      user.Password = Password;
      user.validString = "";
      user
        .save()
        .then(() => SendCahngedEMail(Email, "users"))
        .then(() => res.json("New Password Is Saved"))
        .catch((err) =>
          res.status(400).json({ message: "Error something went wrong" })
        );
    }
  });
});

module.exports = router;