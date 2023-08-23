const express = require("express");
const router = express.Router();
const memoController = require("../controllers/memoController");

router.post("/new-memo", memoController.createMemo);
router.post("/updated-memo", memoController.updateMemo);
router.delete("/:id", memoController.deleteMemo);
router.get("/:target_id", memoController.getMemosById);

module.exports = { router };
