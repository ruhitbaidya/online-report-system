import express from "express";
import { reportControler } from "./report.controler";
import { upload } from "../../utils/fileUpload";

const router = express.Router();

router.post(
  "/create-report",
  upload.array("image", 15),
  reportControler.createReport
);
router.get("/get-all-report", reportControler.getAllReport);

export const reportRouter = router;
