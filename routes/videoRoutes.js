const express = require("express");
const router = express.Router();
const videoControllers = require("../controllers/videoControllers");
const { multerArray } = require("../middlewares/multer");

router.post("/add", multerArray, videoControllers.createOnevideo);
router.get("/all", videoControllers.getAllvideos);
router.delete("/:id", videoControllers.deleteOnevideo);

module.exports = router;
