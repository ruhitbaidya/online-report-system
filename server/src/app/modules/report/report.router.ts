import express from "express";
import { reportControler } from "./report.controler";

const router = express.Router();

router.post("/create-report", reportControler.createReport);
router.get("/get-all-report", reportControler.getAllReport);

export const reportRouter = router;
