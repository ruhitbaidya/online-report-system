import express from "express";
import { doctorsCotroler } from "./doctor.controler";

const router = express.Router();

router.post("/create-doctors", doctorsCotroler.createDoctor);
router.get("/get-all-doctors", doctorsCotroler.getAllDoctors);

export const doctorRouter = router;
