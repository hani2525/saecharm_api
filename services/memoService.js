const memoDao = require("../models/memoDao");

const createMemo = async (writer_id, target_id, content) =>
  memoDao.createMemo(writer_id, target_id, content);

const updateMemo = async (content, id) => memoDao.updateMemo(content, id);

const deleteMemo = async (id) => memoDao.deleteMemo(id);

const getMemosById = async (target_id) => memoDao.getMemosById(target_id);

module.exports = {
  createMemo,
  updateMemo,
  deleteMemo,
  getMemosById,
};
