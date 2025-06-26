import { ErrorRequestHandler } from "express";

const globalErrorHandel: ErrorRequestHandler = async (err, req, res, next) => {
  const statusCode = 500;
  const message = err.message;
  const errorSource = err;
  res.status(statusCode).json({
    success: false,
    message,
    errorSource,
    error: err,
  });
};

export default globalErrorHandel;
