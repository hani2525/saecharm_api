const errGenerator = (errParams) => {
  const { message, statusCode } = errParams;
  const err = new Error(message);
  err.statusCode = statusCode;
  return err;
};

const errHandler = (err, req, res, next) => {
  const { statusCode, message } = err;
  console.log(`statusCode : ${statusCode}, message : ${message}`);
  res.status(statusCode || 500).json({
    message: message,
  });
};

module.exports = { errGenerator, errHandler };
