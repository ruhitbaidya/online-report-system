import catchAsyncFun from "../../utils/catchAsyncFunc";
import sendReponse from "../../utils/sendResponse";
import { refDoctorServices } from "./refDoctor.services";

const createDoctorControler = catchAsyncFun(async (req, res) => {
  const doctorInfo = req.body;
  console.log(doctorInfo);
  const result = await refDoctorServices.createRefDoctor(doctorInfo);
  sendReponse(res, {
    success: true,
    status: 200,
    message: "Doctor Create Success",
    result,
  });
});

const refDoctorEditControler = catchAsyncFun(async (req, res) => {
  const doctorInfo = req.body;
  const idsInfo = req.params.id;
  const result = await refDoctorServices.refDoctorEdit(idsInfo, doctorInfo);
  sendReponse(res, {
    status: 200,
    success: true,
    message: "Doctors Edit Success",
    result,
  });
});

const getAllDoctorByUserControler = catchAsyncFun(async (req, res) => {
  const ids = req.params.id;
  const result = await refDoctorServices.getAllrefDoctor(ids);
  sendReponse(res, {
    status: 200,
    success: true,
    message: "Get All Doctors",
    result,
  });
});

export const refDoctorsControler = {
  createDoctorControler,
  refDoctorEditControler,
  getAllDoctorByUserControler,
};
