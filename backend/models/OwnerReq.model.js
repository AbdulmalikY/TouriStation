const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ownerReqSchema = new Schema({

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
    unique: true,
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
  OwnerDes:
  {
    type: String,
  },
  AdminDes:
  {
    type: String,
  },
  Status:
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
  // OwnerNew:
  // {
  //   type: mongoose.Schema.Types.ObjectID,
  //   ref: "Owner"
  // },
  RequestAdmin:
  {
    type: mongoose.Schema.Types.ObjectID,
    ref: "Admin"
  }
},
  {
  timestamps: true,
});

const OwnerReq = mongoose.model("OwnerReq", ownerReqSchema) ;

module.exports = OwnerReq;
