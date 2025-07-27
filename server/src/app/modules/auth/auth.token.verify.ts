import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import { configs } from "../../config/configs";

export const tokenVerify = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const token = req?.headers?.authorization;
  try {
    const jwtverify = jwt.verify(
      token as string,
      configs.token_secrate as string
    );
    console.log(jwtverify);
  } catch (err) {
    res.status(200).json({ success: false, message: "Unauthorize User" });
  }
};
