import express from "express";
import { reportControler } from "./report.controler";
import { upload } from "../../utils/fileUpload";

const router = express.Router();

router.post(
  "/create-report",
  upload.array("testImg", 15),
  reportControler.createReport
);
router.get("/get-all-report", reportControler.getAllReport);
router.delete("/deleteReport/:id", reportControler.deleteReports);
export const reportRouter = router;
