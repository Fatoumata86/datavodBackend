require("dotenv").config({
	path: ".env",
});
const express = require("express");
const app = express();
const path = require("path");
const cors = require("cors");
const mongoose = require("mongoose");
const { PORT, URI } = process.env;
const userRoutes = require("./routes/userRoutes");

app.use(cors());
app.use(express.json());
app.use(
	express.urlencoded({
		extended: false,
	})
);
app.use("/public", express.static(path.join(__dirname, "public")));

app.use("/users", userRoutes);

if (!PORT || !URI) {
	console.log("You need to include .env file.");
	return;
}

mongoose.connect(URI, (err) => {
	if (err) {
		console.log(`Error connection to ${URI}`);
		console.log(err);
		process.exit(1);
	}
	console.log(`Mongoose is connected to ${URI}`);
});

app.listen(PORT, () => {
	console.log(`DataVod API driving on port ${PORT}`);
});
