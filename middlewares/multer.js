const multer = require("multer");
const path = require("path");

const uniqueFilename = (req, file, cb) => {
	const nameObject = path.parse(file.originalname);
	cb(
		null,
		nameObject.name.split(" ").join("_") + Date.now() + nameObject.ext
	);
};

const avatarStorage = multer.diskStorage({
	destination: "public/avatars",
	filename: uniqueFilename,
});

const videoStorage = multer.diskStorage({
	destination: "public/videos",
	filename: uniqueFilename,
});

module.exports = {
	multerOneAvatar: multer({
		storage: avatarStorage,
	}).single("image"),
	multerOneVideo: multer({
		storage: videoStorage,
	}).single("video"),
};
