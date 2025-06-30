import catchAsyncFun from "../../utils/catchAsyncFunc";
import sendReponse from "../../utils/sendResponse";
import { doctorsServices } from "./doctor.services";

const createDoctor = catchAsyncFun(async (req, res) => {
  const data = req.body;
  const result = await doctorsServices.createDoctos(data);
  sendReponse(res, {
    success: true,
    status: 200,
    message: "Doctors Create Successfull",
    data: result,
  });
});

const getAllDoctors = catchAsyncFun(async (req, res) => {
  const result = await doctorsServices.getAllDoctors();
  sendReponse(res, {
    success: true,
    status: 200,
    message: "Doctors Get Successfull",
    data: result,
  });
});
export const doctorsCotroler = {
  createDoctor,
  getAllDoctors,
};
