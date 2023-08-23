const { appDataSource } = require("./index");

//새가족 정보 등록
const createNewbie = async (body) => {
  const {
    admin_id,
    profile_image,
    name,
    first_visit,
    birth_date,
    is_baptized,
    address,
    phone_number,
    guide,
    job,
    description,
    gender,
    newbie_type,
  } = body;

  appDataSource.query(
    `
      INSERT INTO newbies(
        admin_id,
        team_id,
        profile_image,
        name,
        first_visit,
        birth_date,
        is_baptized,
        address,
        phone_number,
        guide,
        job,
        description,
        gender,
        newbie_type
      ) VALUES (
        ?,
        null,
        ?,
        ?,
        ?,
        ?,
        ?,
        ?,
        ?,
        ?,
        ?,
        ?,
        ?,
        ?
      )
      `,
    [
      admin_id,
      profile_image,
      name,
      first_visit,
      birth_date,
      is_baptized,
      address,
      phone_number,
      guide,
      job,
      description,
      gender,
      newbie_type,
    ]
  );
  return true;
};

//새가족 전체 목록 주차별로 가져오기
const getNewbiesByClass = async (user_type) => {
  const newbies = await appDataSource.query(
    `
      SELECT 
      n.id newbie_id,
      n.name newbie_name,
      a.name admin_name,
      t.orientation,
      t.first_class,
      t.second_class,
      t.third_class,
      t.fourth_class,
      t.settled_date
      FROM newbies n
      JOIN admins a
      ON n.admin_id = a.id
      LEFT JOIN attendance_table t
      ON n.id = t.newbie_id
      WHERE n.newbie_type = ?
    `,
    [user_type]
  );
  return newbies;
};

//새가족 정보 가져오기
const getNewbieInfo = async (id) => {
  const info = await appDataSource.query(
    `
      SELECT
      a.name responsibility,
      n.admin_id,
      n.profile_image profile,
      n.name name,
      n.gender,
      n.first_visit,
      n.birth_date,
      n.is_baptized,
      n.address,
      n.phone_number,
      n.guide,
      n.job,
      n.description,
      at.orientation,
      at.first_class,
      at.second_class,
      at.third_class,
      at.fourth_class,
      at.settled_date
      FROM newbies n
      JOIN admins a
      ON n.admin_id = a.id
      LEFT JOIN teams t
      ON n.team_id = t.team_name
      LEFT JOIN attendance_table at
      ON n.id = at.newbie_id
      WHERE n.id = ?
    `,
    [id]
  );
  return info;
};

//새가족 내용 업데이트
const updateNewbieInfo = async (body) => {
  const {
    id,
    admin_id,
    name,
    first_visit,
    birth_date,
    is_baptized,
    address,
    phone_number,
    guide,
    job,
    description,
    gender,
  } = body;

  return appDataSource.query(
    `
    UPDATE newbies
    SET
    admin_id = ?,
    name = ?,
    first_visit = ?,
    birth_date = ?,
    is_baptized = ?,
    address = ?,
    phone_number = ?,
    guide = ?,
    job = ?,
    description = ?,
    gender = ?
    WHERE id = ?
    `,
    [
      admin_id,
      name,
      first_visit,
      birth_date,
      is_baptized,
      address,
      phone_number,
      guide,
      job,
      description,
      gender,
      id,
    ]
  );
};

//새가족 정보 삭제
const deleteNewbie = async (id) => {
  return appDataSource.query(
    `
        DELETE FROM newbies
        WHERE id = ?
      `,
    [id]
  );
};

//새가족 사진 업데이트
const uploadProfileImage = async (id, profile_image) => {
  return appDataSource.query(
    `
            UPDATE newbies
            profile_image = ?
            WHERE id = ?
        `,
    [profile_image, id]
  );
};

module.exports = {
  getNewbiesByClass,
  createNewbie,
  updateNewbieInfo,
  getNewbieInfo,
  deleteNewbie,
  uploadProfileImage,
};
