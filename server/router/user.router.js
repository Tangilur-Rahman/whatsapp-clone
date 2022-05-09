const express = require("express");

// create sub-router
const users = express.Router();

// own modules
const verifyToken = require("./../config/verifyToken");
const searchUser = require("../controller/userController");

users.get("/", verifyToken, searchUser);

module.exports = users;
