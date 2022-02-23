const mongoose = require("mongoose");
const Video = require("../models/Video");

const addOneVideo = (req, res) => {
	console.log("Adding Video");
	if (!req.file) {
		return res.status(400).json({
			message: "You need to add at least one video",
		});
	}
	const videosTapes = (file) => `/public/videos/${file.filename}`;
	const video = new Video({
		...req.body,
		public: videosTapes,
	});
	video
		.save()
		.then((video) => {
			return res.status(200).json({
				message: "Video added",
				video: video,
			});
		})
		.catch((err) => {
			console.log(err);
			return res.status(500).json({
				message: "Video couldn't be added",
				error: err,
			});
		});
};

const modifyOneVideo = (req, res) => {
	console.log("Modify Video");
	Video.findOneAndUpdate(
		{
			_id: req.params.id,
		},
		{
			...req.body,
		}
	)
		.then((video) => {
			return res.status(200).json({
				message: "Video modified",
				video: video,
			});
		})
		.catch((err) => {
			console.error(err);
			return res.status(500).json({
				message: "Video couldn't be modified",
				error: err,
			});
		});
};

const getAllVideos = (req, res) => {
	console.log("Get all videos");
	Video.find()
		.then((videos) => {
			if (!videos) {
				return res.status(400).json({
					error: "Videos couldn't be found",
				});
			}
			return res.status(200).json({
				message: "Videos have been found",
				videos: videos,
			});
		})
		.catch((err) => {
			console.error(err);
			return res.status(500).json({
				message: "Videos don't exist",
				error: err,
			});
		});
};

const deleteOneVideo = (req, res) => {
	console.log("Delete Video");
	Video.deleteOne({
		_id: req.params.id,
	})
		.then((video) => {
			if (!video) {
				return res.status(404).json("Video not found");
			}
			return res.status(200).json({
				message: "Video deleted",
				video: video,
			});
		})
		.catch((err) => {
			console.error(err);
			return res.status(500).json({
				message: "Video couldn't be deleted",
				error: err,
			});
		});
};

module.exports = {
	addOneVideo,
	modifyOneVideo,
	getAllVideos,
	deleteOneVideo,
};
