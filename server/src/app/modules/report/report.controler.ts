import catchAsyncFun from "../../utils/catchAsyncFunc";
import sendReponse from "../../utils/sendResponse";
import { uploadImage } from "../../utils/uploadImageCloudinary";
import { reportServices } from "./report.services";

const createReport = catchAsyncFun(async (req, res) => {
  if (Array.isArray(req.files)) {
    const uploadResults = await Promise.all(
      req.files.map((item: Express.Multer.File) =>
        uploadImage("ruhit", item.path)
      )
    );

    console.log("Uploaded URLs:", uploadResults);

    res.json({ urls: uploadResults });
  } else {
    res.status(400).json({ message: "No files found" });
  }
  // const result = await reportServices.createReport(data);
  // sendReponse(res, {
  //   status: 200,
  //   success: true,
  //   message: "Save Success",
  //    result,
  // });
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
