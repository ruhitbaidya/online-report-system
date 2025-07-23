import express from "express";
import { authControler } from "./auth.login";

const router = express.Router();

router.post("/login", authControler.userLoginMethod);

export const authRouter = router;
