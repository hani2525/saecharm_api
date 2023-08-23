const newbieDao = require("../models/newbieDao");
const attendanceDao = require("../models/attendanceDao");

//새가족 등록하기
const createNewbie = (body) => {
  newbieDao.createNewbie(body);
};

//새가족 전체 목록 주차별로 가져오기
const getNewbiesByClass = async (user_type) => {
  const newbies = await newbieDao.getNewbiesByClass(user_type);
  //TODO: 조금 더 효율적으로!

  const data = [[], [], [], [], [], [], []]; //빈 배열 만들기 메소드

  newbies.map((newbie) => {
    if (!newbie.orientation)
      data[0].push({
        id: newbie.newbie_id,
        name: newbie.newbie_name,
        responsibility: newbie.admin_name,
      });
    else if (newbie.orientation && !newbie.first_class)
      data[1].push({
        id: newbie.newbie_id,
        name: newbie.newbie_name,
        responsibility: newbie.admin_name,
      });
    else if (newbie.first_class && !newbie.second_class)
      data[2].push({
        id: newbie.newbie_id,
        name: newbie.newbie_name,
        responsibility: newbie.admin_name,
      });
    else if (newbie.second_class && !newbie.third_class)
      data[3].push({
        id: newbie.newbie_id,
        name: newbie.newbie_name,
        responsibility: newbie.admin_name,
      });
    else if (newbie.third_class && !newbie.fourth_class)
      data[4].push({
        id: newbie.newbie_id,
        name: newbie.newbie_name,
        responsibility: newbie.admin_name,
      });
    else if (newbie.fourth_class && !newbie.settled_date)
      data[5].push({
        id: newbie.newbie_id,
        name: newbie.newbie_name,
        responsibility: newbie.admin_name,
      });
    else if (newbie.settled_date)
      data[6].push({
        id: newbie.newbie_id,
        name: newbie.newbie_name,
        responsibility: newbie.admin_name,
      });
    else return;
  });
  //데이터 집어넣는 것

  const result = [
    {
      id: 1,
      step: "교육 전",
      list: data[0],
    },
    {
      id: 2,
      step: "OT",
      list: data[1],
    },
    {
      id: 3,
      step: "1주차",
      list: data[2],
    },
    {
      id: 4,
      step: "2주차",
      list: data[3],
    },
    {
      id: 5,
      step: "3주차",
      list: data[4],
    },
    {
      id: 6,
      step: "4주차",
      list: data[5],
    },
    {
      id: 7,
      step: "등반",
      list: data[6],
    },
  ];
  //result도 데이터화시켜서 만들기

  return result;
};

//새가족 정보 가져오기
const getNewbieInfo = async (id) => await newbieDao.getNewbieInfo(id);
//새가족 내용 업데이트 - body로 바꾸기
const updateNewbieInfo = (body) => newbieDao.updateNewbieInfo(body);

//새가족 정보 삭제하기
const deleteNewbie = (id) => newbieDao.deleteNewbie(id);

//새가족 사진 업데이트
const updateProfileImage = (id, profile_image) =>
  newbieDao.uploadProfileImage(id, profile_image);

//새가족 주차별 업데이트
const updateAttendance = (id, class_name, date) =>
  attendanceDao.updateAttendace(id, class_name, date);

module.exports = {
  createNewbie,
  getNewbiesByClass,
  getNewbieInfo,
  updateNewbieInfo,
  deleteNewbie,
  updateProfileImage,
  updateAttendance,
};
