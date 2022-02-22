const express = require("express");
const router = express.Router();
const userControllers = require("../controllers/userControllers");

router.post("/signup", userControllers.handleSignup);
router.post("/login", userControllers.handleLogin);

router.get("/all", userControllers.getAllProfile);

router.put("/:id", userControllers.modifyUserProfile);
router.put("/avatar/:id", multerSingle, userControllers.modifyAvatar);

module.exports = router;
