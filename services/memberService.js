const memberDao = require("../models/memberDao");

//목원 등록
const createMember = (team_id, name, gender, birth_year, position) =>
  memberDao.createMember(team_id, name, gender, birth_year, position);

const getTeams = async () => await memberDao.getTeams();

//목장 읽어오기
const getMembersByTeam = async () => {
  const members = await memberDao.getAllMembers();
  const tmpResult = [];
  const result = [];

  const findTeam = (member) => {
    const tmpIndex = tmpResult.findIndex(
      (el) =>
        el.village_id === member.village_id && el.team_id === member.team_id
    );

    if (tmpIndex === -1) {
      tmpResult.push({
        village_id: member.village_id,
        team_id: member.team_id,
        team_data: [member],
      });
    } else {
      tmpResult[tmpIndex].team_data.push(member);
    }
  };

  const findVillage = (team) => {
    const resultIndex = result.findIndex(
      (el) => el.village_id === team.village_id
    );

    if (resultIndex === -1) {
      result.push({
        village_id: team.village_id,
        village_data: [{ team_id: team.team_id, team_data: team.team_data }],
      });
    } else {
      result[resultIndex].village_data.push({
        team_id: team.team_id,
        team_data: team.team_data,
      });
    }
  };

  members.map((member) => findTeam(member));
  tmpResult.map((team) => findVillage(team));
  return result;
};

module.exports = {
  createMember,
  getMembersByTeam,
  getTeams,
};
