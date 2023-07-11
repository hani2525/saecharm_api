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
    SELECT m.team_id, t.team_name, m.name, m.gender, m.birth_year, m.position, v.id as village_id, v.village_name, v.elder
    FROM team_members m
    JOIN teams t
    ON m.team_id = t.id
    JOIN villages v
    ON t.village_id = v.id;    
    `
  );
  return members;
};

const getTeams = async () => {
  const teams = await appDataSource.query(
    `
    SELECT t.team_name, m.team_id, m.name
    FROM team_members m 
    JOIN teams t
    ON t.id = m.team_id
    WHERE position = 1
    AND m.team_id BETWEEN 1 AND 12
    ORDER BY team_id;
    `
  );
  return teams;
};
module.exports = {
  createMember,
  getAllMembers,
  getTeams,
};
