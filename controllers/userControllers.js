const mongoose = require("mongoose");
const User = require("../models/User");
const fs = require("fs");
const path = require("path");

const handleSignup = (req, res) => {
	console.log("Handle signup");
	delete req.body.passwordConfirm;
	const user = new User({
		...req.body,
	});
	user.save()
		.then((user) => {
			return res.status(200).json({
				message: "User was created",
				user: user,
			});
		})
		.catch((err) => {
			console.error(err);
			return res.status(500).json({
				message: "User was not created",
				error: err,
			});
		});
};

const handleLogin = (req, res) => {
	console.log("Handle login");
	User.findOne({
		username: req.body.username,
	})
		.then((user) => {
			if (!user) {
				return res.status(404).json({
					error: "User not found",
				});
			}
			if (user.password !== req.body.password) {
				return res.status(403).json({
					error: "Incorrect password",
				});
			}
			return res.status(200).json({
				message: "Utilisateur has been found",
				userId: user._id,
			});
		})
		.catch((err) => {
			console.error(err);
			return res.status(500).json({
				message: "User does not exist",
				error: err,
			});
		});
};

const getAllUsers = (req, res) => {
	console.log("Get All Users");
	User.find()
		.then((Users) => {
			if (!Users) {
				return res.status(400).json({
					message: "Users do not exist",
				});
			}
			return res.status(200).json({
				message: "Users were found",
				Users: Users,
			});
		})
		.catch((err) => {
			console.error(err);
			return res.status(500).json({
				message: "Users couldn't be found",
				error: err,
			});
		});
};

const modifyUserProfile = (req, res) => {
	console.log("Modifying profile");
	User.findOneAndUpdate(
		{
			_id: req.params.id,
		},
		{
			...req.body,
		}
	)
		.then((user) => {
			return res.status(200).json({
				message: "User profil modified",
				user: user,
			});
		})
		.catch((err) => {
			console.error(err);
			return res.status(500).json({
				message: "User profile could not be modified",
				error: err,
			});
		});
};

module.exports = {
	handleSignup,
	handleLogin,
	getAllUsers,
	modifyUserProfile,
	modifyAvatar,
};
