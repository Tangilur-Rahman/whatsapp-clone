const express = require("express");

// create sub-router
const signup = express.Router();

// own modules
const {signupPost} = require("./../controller/signupController");
// const verifyUser = require("./../config/verifyUser");

// signup.get("/",verifyUser,(req,res)=>{
//    res.status(200).json(req.verifiedUserCustom)
// });

signup.post("/", signupPost);

module.exports = signup;
