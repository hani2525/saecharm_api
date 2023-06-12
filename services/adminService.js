const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const errUtils = require("../utils/errUtils");
// const axios = require("axios");

const adminDao = require("../models/adminDao");

const signIn = async (account, password) => {
  const admin = await adminDao.getAdminByAccount(account);

  if (!admin) {
    throw errUtils.errGenerator({
      statusCode: 400,
      message: "INVALID_USER",
    });
  }

  const payLoad = { adminId: admin.id };
  const hashedPassword = admin.password;
  const checkHash = await bcrypt.compare(password, hashedPassword);

  if (!checkHash) {
    throw errUtils.errGenerator({
      statusCode: 400,
      message: "INVALID_PASSWORD",
    });
  }
  const secretKey = process.env.SECRET_KEY;
  return {
    token: jwt.sign(payLoad, secretKey),
    name: admin.name,
    id: admin.id,
  };
};

module.exports = {
  signIn,
};
