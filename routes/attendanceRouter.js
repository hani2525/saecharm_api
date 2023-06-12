const express = require("express");
const router = express.Router();
const attendanceController = require("../controllers/attendanceController");

router.post("/", attendanceController.updateAttendance);
router.get("/info/:newbie_id", attendanceController.getAttendanceInfo);

module.exports = { router };
