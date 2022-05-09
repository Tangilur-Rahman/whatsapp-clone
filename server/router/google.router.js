const express = require("express");

// create sub-router
const google = express.Router();

// own modules
const { googlePost } = require("../controller/googleController");
const verifyUser = require("./../config/verifyUser");

google.get("/", verifyUser, (req, res) => {
	res.status(200).json(req.verifiedUserGoogle);
});

google.post("/", googlePost);

module.exports = google;
