import express from "express";
import { userControler } from "./user.controler";
import { upload } from "../../utils/fileUpload";

const router = express.Router();

router.post(
  "/create-user",
  upload.single("file.image"),
  userControler.createUser
);
router.get("/get-all-user", userControler.getAllUser);

export const userRouter = router;
