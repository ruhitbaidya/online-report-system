import express from "express";
import { doctorRouter } from "../modules/doctor/doctor.router";
import { userRouter } from "../modules/user/user.router";
import { reportRouter } from "../modules/report/report.router";
import { refDoctorRouter } from "../modules/refDoctor/refDoctor.router";
import { authRouter } from "../modules/auth/auth.router";

const router = express.Router();

const makeRouter = [
  {
    path: "/",
    element: doctorRouter,
  },
  {
    path: "/",
    element: userRouter,
  },
  {
    path: "/",
    element: reportRouter,
  },
  {
    path: "/",
    element: refDoctorRouter,
  },
];

router.use("/auth", authRouter);
makeRouter.forEach((item) => router.use(`/api${item.path}`, item.element));
export default router;
