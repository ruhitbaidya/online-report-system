import { NextFunction, Request, Response } from "express";
import { StatusCodes } from "http-status-codes";

const notFound = async (req: Request, res: Response, next: NextFunction) => {
  res.status(StatusCodes.NOT_FOUND).json({
    success: false,
    message: "Api Not Found",
    error: "",
  });
};

export default notFound;
