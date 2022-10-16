const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const requestSchema = new Schema({
//PlaceId, UID
  Reason: {
    type: String,
  },
  Status: {
    type: String,
  },
  RequestOwner: {
    type: String,
  },
  RequestUser: {
    type: String,
  },
  Place: {
    type: String,
  },
  Type: {
    type: String,
  },
},
  {
  timestamps: true,
});

const Request = mongoose.model("Request", requestSchema) ;

module.exports = Request;
