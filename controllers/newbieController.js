const newbieService = require("../services/newbieService");

const createNewbie = async (req, res) => {
  try {
    const { body } = req;
    body.is_baptized = body.is_baptized === true;
    body.first_visit = new Date(body.first_visit);
    body.birth_date = new Date(body.birth_date);

    newbieService.createNewbie(body);
    return res.status(201).json({
      message: "CREATE_NEWBIE_SUCCESS",
    });
  } catch (err) {
    console.log(err);
    return res.status(err.statusCode || 500).json({ message: err.message });
  }
};

const getNewbiesByClass = async (req, res) => {
  try {
    const newbiesByClass = await newbieService.getNewbiesByClass();
    return res.status(200).json({ data: newbiesByClass });
  } catch (err) {
    console.log(err);
    return res.status(err.statusCode || 500).json({ message: err.message });
  }
};

const getNewbieInfo = async (req, res) => {
  try {
    const { id } = req.params;
    const newbieInfo = await newbieService.getNewbieInfo(id);
    return res.status(200).json({ data: newbieInfo });
  } catch (err) {
    console.log(err);
    return res.status(err.statusCode || 500).json({ message: err.message });
  }
};

const updateNewbieInfo = async (req, res) => {
  try {
    const { body } = req;
    body.is_baptized = body.is_baptized === "1";
    body.admin_id = Number(body.admin_id);
    body.first_visit = new Date(body.first_visit);
    body.birth_date = new Date(body.birth_date);
    body.id = Number(body.id);
    newbieService.updateNewbieInfo(body);
    return res.status(201).json({
      message: "UPDATE_NEWBIE_SUCCESS",
    });
  } catch (err) {
    console.log(err);
    return res.status(err.statusCode || 500).json({ message: err.message });
  }
};

const updateProfileImage = async (req, res) => {
  try {
    const { id, profile_image } = req.body;
    newbieService.updateProfileImage(id, profile_image);
    return res.status(201).json({
      message: "UPDATE_PROFILE_IMAGE_SUCCESS",
    });
  } catch (err) {
    console.log(err);
    return res.status(err.statusCode || 500).json({ message: err.message });
  }
};

module.exports = {
  createNewbie,
  getNewbieInfo,
  getNewbiesByClass,
  updateNewbieInfo,
  updateProfileImage,
};
