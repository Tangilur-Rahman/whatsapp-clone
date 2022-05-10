const express = require("express");

// create sub-router
const users = express.Router();

// own modules
const { searchUsers, getUsers } = require("../controller/userController");
const verifyUser = require("./../config/verifyUser");

users.get("/", verifyUser, getUsers);

users.get("/users/search", verifyUser, searchUsers);

module.exports = users;
