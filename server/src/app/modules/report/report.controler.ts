import catchAsyncFun from "../../utils/catchAsyncFunc";
import sendReponse from "../../utils/sendResponse";
import { uploadImage } from "../../utils/uploadImageCloudinary";
import { reportServices } from "./report.services";

const createReport = catchAsyncFun(async (req, res) => {
  const pasentInfo = JSON.parse(req.body.patientData);
  let imageUrl = [];
  console.log(pasentInfo);
  if (Array.isArray(req.files)) {
    const uploadResults = await Promise.all(
      req.files.map((item: Express.Multer.File, idx) =>
        uploadImage(
          `tast${pasentInfo.pasentId}${pasentInfo.pasentName}${idx}`,
          item.path
        )
      )
    );
    imageUrl = uploadResults.map((item: any) => item?.secure_url);
    console.log(imageUrl);
  } else {
    res.status(400).json({ message: "No files found" });
    return;
  }
  console.log({ ...pasentInfo, reportImage: imageUrl });
  const result = await reportServices.createReport({
    ...pasentInfo,
    reportImage: imageUrl,
  });
  sendReponse(res, {
    status: 200,
    success: true,
    message: "Save Success",
    result,
  });
});

const getAllReport = catchAsyncFun(async (req, res) => {
  const ids = req.params.id;
  const result = await reportServices.getAllReports(ids);
  sendReponse(res, {
    status: 200,
    success: true,
    message: "Get All Reports",
    result,
  });
});

const getAdminReports = catchAsyncFun(async (req, res) => {
  const result = await reportServices.getAdminReport();
  sendReponse(res, {
    status: 200,
    success: true,
    message: "Get All Reports",
    result,
  });
});
const deleteReports = catchAsyncFun(async (req, res) => {
  const ids = req.params.id;
  const result = await reportServices.deleteReports(ids);
  sendReponse(res, {
    success: true,
    message: "Report Delete Success",
    status: 200,
    result,
  });
});

const approveOrder = catchAsyncFun(async (req, res) => {
  const ids = req.body;
  console.log(ids);
  const result = await reportServices.aproveOrders(ids);
  sendReponse(res, {
    success: true,
    message: "Report Aprove",
    status: 200,
    result,
  });
});
export const reportControler = {
  createReport,
  getAllReport,
  deleteReports,
  approveOrder,
  getAdminReports,
};
