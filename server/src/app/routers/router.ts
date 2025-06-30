import express from "express";
import { doctorRouter } from "../modules/doctor/doctor.router";
import { userRouter } from "../modules/user/user.router";

const router = express.Router();

const makeRouter = [
  {
    path: "/",
    element: doctorRouter,
  },
  {
    path :"/",
    element : userRouter
  }
];

makeRouter.forEach((item) => router.use(`/api${item.path}`, item.element));

export default router;
