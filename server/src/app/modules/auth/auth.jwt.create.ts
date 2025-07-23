import jwt from "jsonwebtoken";
import { configs } from "../../config/configs";

export const createToken = (info: any) => {
  const token = jwt.sign(
    { id: info?._id, role: info?.role },
    configs.token_secrate as string,
    { expiresIn: "15m" }
  );
  return token;
};
