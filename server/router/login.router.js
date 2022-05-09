const express = require("express");

// create sub-router
const login = express.Router();

// own modules
const { loginPost } = require("../controller/loginController");

login.post("/", loginPost);

module.exports = login;
