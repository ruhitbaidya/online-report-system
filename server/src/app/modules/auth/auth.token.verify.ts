import { Request, Response } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";
import { configs } from "../../config/configs";

interface TokenData extends JwtPayload {
  id: string;
  role: string;
}
export const tokenVerifyRoute = async (req: Request, res: Response) => {
  const token = req.headers.authorization;

  if (!token) {
    res.status(405).json({ success: false, message: "Unauthorize User" });
  }
  const tokenSeter = token?.split(" ");
  if (tokenSeter?.length === 2 && tokenSeter[0] === "berr") {
    jwt.verify(
      tokenSeter[1],
      configs.token_secrate as string,
      function async(err, decoded) {
        if (decoded) {
          const payload = decoded as TokenData;
          res
            .status(200)
            .json({ success: true, message: "success", result: payload });
        }
        if (err) {
          res.status(401).json({ success: false, message: "Unauthorize User" });
        }
      }
    );
  }
};
