import express from "express";
import { doctorRouter } from "../modules/doctor/doctor.router";

const router = express.Router();

const makeRouter = [
  {
    path: "/",
    element: doctorRouter,
  },
];

makeRouter.forEach((item) => router.use(item.path, item.element));

export default router;
