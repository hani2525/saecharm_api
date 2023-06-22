const attendanceService = require("../services/attendanceService");

const updateAttendance = async (req, res) => {
  try {
    const { date, newbie_id, class_name } = req.body;
    const { hasData } = await attendanceService.checkData(newbie_id);
    if (hasData === 1) {
      attendanceService.updateAttendance(newbie_id, class_name, date);
      return res.status(201).json({
        message: "UPDATE_ATTENDANCE_SUCCESS",
      });
    } else if (hasData === 0) {
      attendanceService.createAttendance(newbie_id, class_name, date);
      return res.status(201).json({
        message: "CREATE_ATTENDANCE_SUCCESS",
      });
    }
  } catch (err) {
    console.log(err);
    return res.status(err.statusCode || 500).json({ message: err.message });
  }
};

const getAttendanceInfo = async (req, res) => {
  try {
    const { newbie_id } = req.params;
    const attendanceInfo = await attendanceService.getAttendanceInfo(
      Number(newbie_id)
    );
    return res.status(200).json({ data: attendanceInfo });
  } catch (err) {
    console.log(err);
    return res.status(err.statusCode || 500).json({ message: err.message });
  }
};

module.exports = {
  updateAttendance,
  getAttendanceInfo,
};
