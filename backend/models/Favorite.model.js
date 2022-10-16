
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
//PID, UID, EID
const favoriteSchema = new Schema({

  FavoriteUser:
  {
    type: mongoose.Schema.Types.ObjectID,
    ref: "User"
  },
  FavoriteOwner:
  {
    type: mongoose.Schema.Types.ObjectID,
    ref: "Owner"
  },
  FavoriteAdmin:
  {
    type: mongoose.Schema.Types.ObjectID,
    ref: "Owner"
  },
  FavoritePlace:
    {
      type: mongoose.Schema.Types.ObjectId,
      ref:"Place",
    },
  FavoriteEvent:
    {
    type: mongoose.Schema.Types.ObjectId,
    ref:"Event",
  },
},
  {
  timestamps: false,
});

const Favorite = mongoose.model("Favorite", favoriteSchema) ;

module.exports = Favorite;
