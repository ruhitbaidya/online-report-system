import catchAsyncFun from "../../utils/catchAsyncFunc";
import sendReponse from "../../utils/sendResponse";
import { reportServices } from "./report.services";

const createReport = catchAsyncFun(async (req, res) => {
  const data = req.body;
  const result = await reportServices.createReport(data);
  sendReponse(res, {
    status: 200,
    success: true,
    message: "Save Success",
     result,
  });
});

const getAllReport = catchAsyncFun(async (req, res) => {
  const result = await reportServices.getAllReports();
  sendReponse(res, {
    status: 200,
    success: true,
    message: "Get All Reports",
     result,
  });
});
export const reportControler = {
  createReport,
  getAllReport,
};
