const memoService = require("../services/memoService");

const createMemo = async (req, res) => {
  try {
    const { writer_id, target_id, content } = req.body;
    memoService.createMemo(writer_id, target_id, content);
    return res.status(201).json({
      message: "CREATE_MEMO_SUCCESS",
    });
  } catch (err) {
    console.log(err);
    return res.status(err.statusCode || 500).json({ message: err.message });
  }
};

const deleteMemo = async (req, res) => {
  try {
    const { id } = req.body;
    memoService.deleteMemo(id);
    return res.status(201).json({
      message: "DELETE_MEMO_SUCCESS",
    });
  } catch (err) {
    console.log(err);
    return res.status(err.statusCode || 500).json({ message: err.message });
  }
};

const getMemosById = async (req, res) => {
  try {
    const { target_id } = req.params;
    const memos = await memoService.getMemosById(Number(target_id));
    return res.status(200).json({ data: memos });
  } catch (err) {
    console.log(err);
    return res.status(err.statusCode || 500).json({ message: err.message });
  }
};

module.exports = {
  createMemo,
  deleteMemo,
  getMemosById,
};
