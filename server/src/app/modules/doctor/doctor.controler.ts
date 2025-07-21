import catchAsyncFun from "../../utils/catchAsyncFunc";
import sendReponse from "../../utils/sendResponse";
import { doctorsModel } from "./doctor.model";
import { doctorsServices } from "./doctor.services";

const createDoctor = catchAsyncFun(async (req, res) => {
  const data = req.body;
  console.log(data);
  // const matcher = await doctorsModel.findOne({ email: data?.email });
  // if (matcher) {
  //   return sendReponse(res, {
  //     status: 200,
  //     message: "This Email Already Exist",
  //     result: null,
  //     success: false,
  //   });
  // }
  // if (!matcher) {
  const result = await doctorsServices.createDoctos(data);
  sendReponse(res, {
    success: true,
    status: 200,
    message: "Doctors Create Successfull",
    result,
  });
  // }
});

const getAllDoctors = catchAsyncFun(async (req, res) => {
  const result = await doctorsServices.getAllDoctors();
  sendReponse(res, {
    success: true,
    status: 200,
    message: "Doctors Get Successfull",
    result,
  });
});
export const doctorsCotroler = {
  createDoctor,
  getAllDoctors,
};
