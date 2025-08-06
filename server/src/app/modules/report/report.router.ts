import express from "express";
import { reportControler } from "./report.controler";
import { upload } from "../../utils/fileUpload";

const router = express.Router();

router.post(
  "/create-report",
  upload.array("testImg", 15),
  reportControler.createReport
);
router.get("/get-all-report/:id", reportControler.getAllReport);
router.delete("/deleteReport/:id", reportControler.deleteReports);
router.patch("/aprove-order", reportControler.approveOrder);
router.get("/admin-report", reportControler.getAdminReports);
router.get("/doctor-geting/:id", reportControler.getSpaceficReport);
export const reportRouter = router;
