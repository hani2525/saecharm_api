const express = require("express");
const router = express.Router();
const memberController = require("../controllers/memberController");

router.get("/", memberController.getMembersByTeam);
router.post("/", memberController.createMember);
router.get("/teams", memberController.getTeams);

module.exports = { router };
