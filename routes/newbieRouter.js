const express = require("express");
const router = express.Router();
const newbieController = require("../controllers/newbieController");

router.post("/detail", newbieController.createNewbie);
router.get("/", newbieController.getNewbiesByClass);
router.get("/detail/:id", newbieController.getNewbieInfo);
router.post("/additional-info", newbieController.updateNewbieInfo);
router.post("/profile-image", newbieController.updateProfileImage);

module.exports = { router };
