const ErrorHander = require("../utils/errorhander");

module.exports = (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.message = err.message || "INTERNAL SERVER ERROR";

  // WRONG MONGODB ID ERROR
  if (err.name === "CastError") {
    const message = `RESORCE NOT FOUND INVALID : : ${err.path}`;
    err = new ErrorHander(message, 400);
  }

  // MONGOOSE DUBLICATE KEY ERROR
  if (err.code === 11000) {
    const message = `DUBLICATE ${Object.keys(err.keyValue)} ENTRED`;
    err = new ErrorHander(message, 400);
  }

  // WRONG  JWT ERROR
  if (err.code === "jsonWebTokenError") {
    const message = `JSON WEB TOKEN IS INVALID TRY AGAIN`;
    err = new ErrorHander(message, 400);
  }

  // JWT EXPIRE ERROR
  if (err.code === "tokenExpiredError") {
    const message = `JSON WEB TOKEN IS EXPIRED TRY AGAIN`;
    err = new ErrorHander(message, 400);
  }

  res.status(err.statusCode).json({
    success: false,
    message: err.message,
  });
};
