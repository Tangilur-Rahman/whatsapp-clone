const express = require("express");
const cookie = require("cookie-parser");
require("dotenv").config();

// own modules
require("./config/connectDatabase");
const signup = require("./router/signup.router");
const login = require("./router/login.router");
const users = require("./router/user.router");
const channel = require("./router/channel.router");
const google = require("./router/google.router");

// main router
const app = express();

// insert request object
app.use(express.json());
app.use(cookie());

// sub router
app.use("/signup", signup);
app.use("/login", login);
app.use("/users", users);
app.use("/channel", channel);
app.use("/google", google);

// 404 not found error
app.use((req, res) => {
	res.status(404).json({ error: "File Not Found" });
});

// custom error handler
app.use((error, req, res, next) => {
	if (error) {
		res.status(500).json({ error: error.message });
	} else {
		next();
	}
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, console.log(`Server was running at ${PORT}`));
