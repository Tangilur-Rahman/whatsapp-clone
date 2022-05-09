const express = require("express");

// create sub-router
const users = express.Router();

// own modules
const searchUser = require("../controller/userController");
const verifyUser = require("./../config/verifyUser");

users.get("/", verifyUser, searchUser);

module.exports = users;
