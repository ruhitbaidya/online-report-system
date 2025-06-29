
import { NextFunction, Request, RequestHandler, Response } from "express";

const catchAsyncFun = (fn: RequestHandler): RequestHandler => {
  return (req: Request, res: Response, next: NextFunction) => {
    Promise.resolve(fn(req, res, next)).catch((err)=> next(err));
  };
};

export default catchAsyncFun;