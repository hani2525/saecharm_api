const express = require("express");
const router = express.Router();

const adminRouter = require("./adminRouter");
const memberRouter = require("./memberRouter");
const memoRouter = require("./memoRouter");
const newbieRouter = require("./newbieRouter");
const attendanceRouter = require("./attendanceRouter");

router.use("/admin", adminRouter.router);
router.use("/members", memberRouter.router);
router.use("/memos", memoRouter.router);
router.use("/newbies", newbieRouter.router);
router.use("/attendance", attendanceRouter.router);

module.exports = router;
