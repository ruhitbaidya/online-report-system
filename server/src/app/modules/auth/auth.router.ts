import express from "express";
import { authControler } from "./auth.login";

const router = express.Router();

router.post("/auth-login", authControler.loginMethod);

export const authRouter = router;
