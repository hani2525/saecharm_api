const attendanceDao = require("../models/attendanceDao");

//새가족 테이블 업데이트
const createAttendance = (newbie_id, class_name, date) =>
  attendanceDao.createAttendance(newbie_id, class_name, date);

//새가족 주차별 업데이트
const updateAttendance = (newbie_id, class_name, date) =>
  attendanceDao.updateAttendace(newbie_id, class_name, date);

//출석 테아블 데이터 존재 확인
const checkData = (newbie_id) => attendanceDao.checkData(newbie_id);

//새가족 정보 가져오기
const getAttendanceInfo = async (newbie_id) =>
  await attendanceDao.getAttendanceInfo(newbie_id);

module.exports = {
  updateAttendance,
  createAttendance,
  getAttendanceInfo,
  checkData,
};
