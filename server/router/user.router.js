const express = require("express");

// create sub-router
const users = express.Router();

// own modules
const { searchUsers, getUsers } = require("../controller/userController");
const userModel = require("./../model/userModel");
const verifyUser = require("./../config/verifyUser");

users.get("/", verifyUser, getUsers);

users.get("/currentUser", verifyUser, (req, res) => {
	const verifiedUser = req.verifiedUserCustom
		? req.verifiedUserCustom
		: req.verifiedUserGoogle;

	res.status(200).json(verifiedUser);
});

users.get("/users/search", verifyUser, searchUsers);

module.exports = users;
