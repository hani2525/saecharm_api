const memberService = require("../services/memberService");

const getMembersByTeam = async (req, res) => {
  try {
    const membersByTeam = await memberService.getMembersByTeam();
    return res.status(200).json({ data: membersByTeam });
  } catch (err) {
    console.log(err);
    return res.status(err.statusCode || 500).json({ message: err.message });
  }
};

const createMember = async (req, res) => {
  try {
    const { team_id, name, gender, birth_year, position } = req.body;
    if (!team_id || !name || !gender || !birth_year) {
      return res.status(400).json({ message: "KEY_ERROR" });
    }

    await memberService.createMember(
      team_id,
      name,
      gender,
      birth_year,
      position
    );
    return res.status(201).json({
      message: "CREATE_MEMBER_SUCCESS",
    });
  } catch (err) {
    console.log(err);
    return res.status(err.statusCode || 500).json({ message: err.message });
  }
};

module.exports = {
  getMembersByTeam,
  createMember,
};
