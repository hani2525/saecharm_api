const { appDataSource } = require("./index");

//새가족 테이블 생성
const createAttendance = async (newbie_id, class_name, date) => {
  date = new Date(date);
  return appDataSource.query(
    `
        INSERT INTO attendance_table(
          newbie_id,
          orientation
        ) VALUES (
          ?,?
        )
      `,
    [newbie_id, date]
  );
};

//새가족 주차별 업데이트
const updateAttendace = async (newbie_id, class_name, date) => {
  date = new Date(date);
  return appDataSource.query(
    `
        UPDATE attendance_table
        SET ${class_name} = ?
        WHERE newbie_id = ?
      `,
    [date, newbie_id]
  );
};

// 출석 테이블 데이터 존재 여부 확인
const checkData = async (newbie_id) => {
  const [hasData] = await appDataSource.query(
    `
    SELECT EXISTS(
       SELECT 
        orientation OT,
        first_class firstClass,
        second_class secondClass,
        third_class thirdClass,
        fourth_class fourthClass
       FROM attendance_table WHERE newbie_id = ?
       ) as hasData
      `,
    [newbie_id]
  );

  return hasData;
};

//새가족 주차별 정보
const getAttendanceInfo = async (newbie_id) => {
  const attendanceInfo = appDataSource.query(
    `
       SELECT 
        orientation,
        first_class firstClass,
        second_class secondClass,
        third_class thirdClass,
        fourth_class fourthClass
       FROM attendance_table
      WHERE newbie_id = ?
      `,
    [newbie_id]
  );

  return attendanceInfo;
};

module.exports = {
  createAttendance,
  updateAttendace,
  getAttendanceInfo,
  checkData,
};
