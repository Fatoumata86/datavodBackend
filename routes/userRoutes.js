const express = require("express");
const router = express.Router();
const userControllers = require("../controllers/userControllers");

router.post("/signup", userControllers.handleSignup);
router.post("/login", userControllers.handleLogin);

router.get("/all", userControllers.getAllUsers);
router.put("/:id", userControllers.modifyUserProfile);

// router.put("/avatar/:id", multerOneAvatar, userControllers.modifyAvatar);

module.exports = router;
