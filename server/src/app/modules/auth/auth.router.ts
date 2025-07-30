import express from "express";
import { authControler } from "./auth.login";

const router = express.Router();

router.post("/login", authControler.userLoginMethod);
router.post("/doctor-login", authControler.doctorLoginMethod);
export const authRouter = router;
