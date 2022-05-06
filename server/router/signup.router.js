const express = require("express");

// create sub-router
const signup = express.Router();

// own modules
const signupPost = require("./../controller/signupController");

signup.post("/", signupPost);

module.exports = signup;
