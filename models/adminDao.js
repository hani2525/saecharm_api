const { appDataSource } = require("./index");

const createAdmin = async (account, name, hashedPassword, gender, position) => {
  return appDataSource.query(
    `
    INSERT INTO admins( name, gender, position, account_name, password)
    VALUES(?,?,?,?,?)
  `,
    [name, gender, position, account, hashedPassword]
  );
};

const getAdminByAccount = async (account) => {
  const [admin] = await appDataSource.query(
    `
    SELECT
    id,
    name,
    password,
    account_name
    FROM admins
    WHERE account_name=?
    `,
    [account]
  );

  return admin;
};

module.exports = {
  getAdminByAccount,
  createAdmin,
};
