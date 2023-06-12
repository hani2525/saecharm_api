const adminService = require("../services/adminService");
const { catchAsync } = require("../utils/error");

const signUp = async (req, res) => {
  const body = req.body;
  if (!body.account || !body.password) {
    throw new Error("KEY_ERROR");
  }
  adminService.signUp(body);
  return res.status(200).json({
    message: "SIGNUP_SUCCESS",
  });
};

const signIn = catchAsync(async (req, res) => {
  const { account, password } = req.body;
  if (!account || !password) {
    throw new Error("KEY_ERROR");
  }
  const { token, name, id } = await adminService.signIn(account, password);
  return res.status(200).json({
    message: "LOGIN_SUCCESS",
    accessToken: token,
    name: name,
    id: id,
  });
});

module.exports = {
  signIn,
  signUp,
};
