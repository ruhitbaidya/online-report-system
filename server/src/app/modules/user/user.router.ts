import express from "express";
import { userControler } from "./user.controler";
import { upload } from "../../utils/fileUpload";
import { tokenVerify } from "../auth/auth.token.verify";

const router = express.Router();

router.post("/create-user", upload.single("image"), userControler.createUser);
router.get("/get-all-user", userControler.getAllUser);
router.delete("/delete-user/:id", userControler.deleteUser);
router.get("/get-singal-user/:id", tokenVerify, userControler.getSingalUser);
export const userRouter = router;
