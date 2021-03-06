const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
	firstName: {
		type: String,
		required: true,
	},
	lastName: {
		type: String,
		required: true,
	},
	userName: {
		type: String,
		required: true,
		index: true,
	},
	email: {
		type: String,
		unique: true,
		trim: true,
		lowercase: true,
		required: true,
	},
	password: {
		type: String,
		required: true,
	},
	avatar: String,
	city: String,
});

module.exports = mongoose.model("User", userSchema);
