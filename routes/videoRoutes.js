const express = require("express");
const router = express.Router();
const videoControllers = require("../controllers/videoControllers");
const { multerOneVideo } = require("../middlewares/multer");

router.post("/add", multerOneVideo, videoControllers.addOneVideo);
router.put("/:id", videoControllers.modifyOneVideo);
router.get("/all", videoControllers.getAllVideos);

router.delete("/:id", videoControllers.deleteOneVideo);

module.exports = router;
