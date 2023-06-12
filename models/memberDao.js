const { appDataSource } = require("./index");

//새가족 등록
const createMember = (team_id, name, gender, birth_year, position) => {
  return appDataSource.query(
    `
      INSERT INTO team_members(
        team_id,
        name,
        gender,
        birth_year,
        position
      ) VALUES (
        ?,
        ?,
        ?,
        ?,
        ?
      )
      `,
    [team_id, name, gender, birth_year, position]
  );
};

const getAllMembers = async () => {
  const members = await appDataSource.query(
    `
      SELECT 
      id,
      team_id,
      name,
      gender,
      birth_year,
      position
      FROM team_members
      ORDER BY position;
    `
  );
  return members;
};

module.exports = {
  createMember,
  getAllMembers,
};
