const { appDataSource } = require("./index");

//새가족 메모 등록
const createMemo = (writer_id, target_id, content) => {
  return appDataSource.query(
    `
        INSERT INTO memos 
        (writer_id, target_id, content, is_deleted)
        VALUES
        (?, ?, ?, false )
      `,
    [writer_id, target_id, content]
  );
};

//새가족 메모 삭제
const deleteMemo = async (id) => {
  return appDataSource.query(
    `
        UPDATE memos
        SET is_deleted = true
        WHERE id = ?
      `,
    [id]
  );
};

//새가족 메모 수정
const updateMemo = async (content, id) => {
  return appDataSource.query(
    `
      UPDATE memos
      SET content = ?
      WHERE id = ?
    `,
    [content, id]
  );
};

//새가족 메모 읽기
const getMemosById = async (target_id) => {
  const memos = await appDataSource.query(
    `
      SELECT
      m.content,
      m.updated_at timeStamp,
      m.id,
      m.writer_id,
      a.name as responsibility
      FROM memos m
      JOIN admins a
      ON m.writer_id = a.id
      WHERE target_id = ? AND m.is_deleted = false
    `,
    [target_id]
  );

  return memos;
};

module.exports = {
  createMemo,
  getMemosById,
  updateMemo,
  deleteMemo,
};
