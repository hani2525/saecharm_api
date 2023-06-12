const { appDataSource } = require("./index");

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
};
