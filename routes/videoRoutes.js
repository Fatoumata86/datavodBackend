const express = require("express");
const router = express.Router();
const videoControllers = require("../controllers/videoControllers");

router.post("/add", multerOneVideo, videoControllers.addOneVideo);
router.put("/:id", videoControllers.modifyOneVideo);
router.get("/all", videoControllers.getAllVideos);

router.delete("/:id", videoControllers.deleteOneVideo);

module.exports = router;
