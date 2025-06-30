import express from "express";
import { userControler } from "./user.controler";

const router = express.Router();


router.post("/create-user", userControler.createUser);
router.get("/get-all-user", userControler.getAllUser)


export const userRouter = router