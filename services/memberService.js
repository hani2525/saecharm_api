const memberDao = require("../models/memberDao");

//목원 등록
const createMember = (team_id, name, gender, birth_year, position) =>
  memberDao.createMember(team_id, name, gender, birth_year, position);

//목장 읽어오기
const getMembersByTeam = async () => {
  const members = await memberDao.getAllMembers();

  const membersByTeam = {
    1: {
      1: [],
      2: [],
    },
    2: {
      3: [],
      4: [],
      5: [],
    },
    3: {
      6: [],
      7: [],
      13: [],
    },
    4: { 8: [], 9: [], 10: [] },
    5: { 11: [], 12: [] },
    6: { 14: [] },
  };

  members.map((member) =>
    membersByTeam[member.village_id][member.team_id].push(member)
  );

  return membersByTeam;
};

//

module.exports = {
  createMember,
  getMembersByTeam,
};
