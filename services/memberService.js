const memberDao = require("../models/memberDao");

//목원 등록
const createMember = (team_id, name, gender, birth_year, position) =>
  memberDao.createMember(team_id, name, gender, birth_year, position);

//목장 읽어오기
const getMembersByTeam = () => {
  //여기서 가져오기
  const members = memberDao.getAllMembers();
  return members;
};

//

module.exports = {
  createMember,
  getMembersByTeam,
};
