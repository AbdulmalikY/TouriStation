const nodemailer = require("nodemailer");
require("dotenv").config();


//Send an email to reigsterd accoutn to verify email
const SendMail = (Email, ValidatorString, type) => {
//   console.log(Email);
//   console.log(ValidatorString);
//   //identify send from email --> Email + Password
//   var Transport = nodemailer.createTransport({
//     service: "hotmail",
//     auth: {
//       user: process.env.EMAILADD,
//       pass: process.env.EMAILPASS,
//     }
//   });

//   var mailOptions;
//   let sender = "Abdulmalik Alyousef";
//   //the Email contetnt Subject + contenet including verifcation url
//   //type refers to the user type route --> admins, owners, or users.
//   //ValidatorString refer to random string 10 length.
//   mailOptions = {
//     from: sender,
//     to: Email,
//     subject: "Account Confirmation",
//     html: `press <a href=http://localhost:3000/${type}/verify/${ValidatorString}> here </a> to verify your ${type} Account.`
//   };

// //Send the email
//   Transport.sendMail(mailOptions, (err, res) =>{
//     if (err) {
//       console.log(err);
//     }else{
//       console.log("Sent");
//     }
//   })
}

const SendResetMail = (Email, ValidatorString, type) => {
//   console.log(Email);
//   console.log(ValidatorString);
//   //identify send from email --> Email + Password
//   var Transport = nodemailer.createTransport({
//     service: "hotmail",
//     auth: {
//       user: process.env.EMAILADD,
//       pass: process.env.EMAILPASS,
//     }
//   });

//   var mailOptions;
//   let sender = "Abdulmalik Alyousef";
//   //the Email contetnt Subject + contenet including verifcation url
//   //type refers to the user type route --> admins, owners, or users.
//   //ValidatorString refer to random string 10 length.
//   mailOptions = {
//     from: sender,
//     to: Email,
//     subject: "Password Reset",
//     html: `press <a href=http://localhost:3001/reset${type}Password/${ValidatorString}/${Email}> here </a> to reset your password .`
//   };

// //Send the email
//   Transport.sendMail(mailOptions, (err, res) =>{
//     if (err) {
//       console.log(err);
//     }else{
//       console.log("Sent Reset Email");
//     }
//   })
}

const SendCahngedEMail = (Email, ValidatorString, type) => {
//   console.log(Email);
//   console.log(ValidatorString);
//   //identify send from email --> Email + Password
//   var Transport = nodemailer.createTransport({
//     service: "hotmail",
//     auth: {
//       user: process.env.EMAILADD,
//       pass: process.env.EMAILPASS,
//     }
//   });

//   var mailOptions;
//   let sender = "Abdulmalik Alyousef";
//   //the Email contetnt Subject + contenet including verifcation url
//   //type refers to the user type route --> admins, owners, or users.
//   //ValidatorString refer to random string 10 length.
//   mailOptions = {
//     from: sender,
//     to: Email,
//     subject: "Password changed",
//     html: `Your password for ${Email} registerd account is changed successefuly.`
//   };

// //Send the email
//   Transport.sendMail(mailOptions, (err, res) =>{
//     if (err) {
//       console.log(err);
//     }else{
//       console.log("Sent");
//     }
//   })
}

//New Account register success
const NewAccountMail = (Email) => {
  //identify send from email --> Email + Password
//   var Transport = nodemailer.createTransport({
//     service: "hotmail",
//     auth: {
//       user: process.env.EMAILADD,
//       pass: process.env.EMAILPASS,
//     }
//   });

//   var mailOptions;
//   let sender = "Abdulmalik Alyousef";
//   //the Email contetnt Subject + contenet including verifcation url
//   //type refers to the user type route --> admins, owners, or users.
//   //ValidatorString refer to random string 10 length.
//   mailOptions = {
//     from: sender,
//     to: Email,
//     subject: "Welcome To TouriStations",
//     html: `You are all set. Now You can visit the website and enjoy the nice features. We are so glad the you joined our communitity.`
//   };

// //Send the email
//   Transport.sendMail(mailOptions, (err, res) =>{
//     if (err) {
//       console.log(err);
//     }else{
//       console.log("Sent");
//     }
//   })
}


//Owner new accound request is denyed
const DenyedAccount = (Email, reason) => {
  //identify send from email --> Email + Password
//   var Transport = nodemailer.createTransport({
//     service: "hotmail",
//     auth: {
//       user: process.env.EMAILADD,
//       pass: process.env.EMAILPASS,
//     }
//   });

//   var mailOptions;
//   let sender = "Abdulmalik Alyousef";
//   //the Email contetnt Subject + contenet including verifcation url
//   //type refers to the user type route --> admins, owners, or users.
//   //ValidatorString refer to random string 10 length.
//   mailOptions = {
//     from: sender,
//     to: Email,
//     subject: "Owner Account update",
//     html: `Unfortunately we will need to inform you that your reuest regarding the owner account is denoed. We are very sorry for sorry for that and we would like to inform you that you could still enjoy the website as a normal user. The reason for the deny is: ${reason} .`
//   };

// //Send the email
//   Transport.sendMail(mailOptions, (err, res) =>{
//     if (err) {
//       console.log(err);
//     }else{
//       console.log("Sent");
//     }
//   })
}

//generate a random string of 10 length for user verifcation
const randString = () =>{
  //genrate random string of 10 length
  const leng = 10
  let randstr = ''
  for (let i = 0; i < leng; i++) {
    const RandomNum = Math.floor((Math.random() * 10 ) + 1)
    randstr += RandomNum
  }
  return randstr;
}



module.exports = {SendMail, SendResetMail, SendCahngedEMail, randString, NewAccountMail, DenyedAccount}
