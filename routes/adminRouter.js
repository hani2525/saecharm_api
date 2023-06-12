const express = require("express");
const router = express.Router();
const adminController = require("../controllers/adminController");

router.post("/signin", adminController.signIn);

module.exports = { router };
