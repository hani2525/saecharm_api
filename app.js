const express = require("express");
const cors = require("cors");
const errUtils = require("./utils/errUtils");
// const morgan = require("morgan");
const routes = require("./routes");
const { globalErrorHandler } = require("./utils/error");

const createApp = () => {
  const app = express();

  app.use(express.json());
  // app.use(morgan("dev"));
  app.use(cors());
  app.use(globalErrorHandler);
  app.use(routes);
  app.use(errUtils.errHandler);

  app.get("/ping", (req, res) => {
    res.status(200).json({ message: "pong" });
  });

  return app;
};

module.exports = { createApp };
