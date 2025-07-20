import express from "express";
import { refDoctorsControler } from "./refDoctor.controler";

const router = express.Router();

router.get("/getRefDoctors", refDoctorsControler.getAllDoctorByUserControler);
router.post("/createRefDoctors", refDoctorsControler.createDoctorControler);
router.patch("/editRefDoctor/:id", refDoctorsControler.refDoctorEditControler);

export const refDoctorRouter = router;
