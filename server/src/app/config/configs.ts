import dotenv from "dotenv";
import path from "path";
dotenv.config({ path: path.join(process.cwd(), ".env") });

export const configs = {
  db_url: process.env.DB_URL,
  port: process.env.PORT,
  coud_name : process.env.CLOUDINARY_NAME,
  coud_Key : process.env.CLOUDINARY_KEY,
  coud_secrate : process.env.CLOUDINARY_SECRATE
};
