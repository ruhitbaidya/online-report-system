import bcrypt from "bcrypt";
import catchAsyncFun from "../../utils/catchAsyncFunc";
import sendReponse from "../../utils/sendResponse";
import { userModel } from "../user/user.model";
import { createToken } from "./auth.jwt.create";
import { doctorsModel } from "../doctor/doctor.model";

const userLoginMethod = catchAsyncFun(async (req, res) => {
  const info = req.body;

  const infoFounder = await userModel.findOne({ email: info?.user });
  if (infoFounder) {
    bcrypt.compare(info.password, infoFounder.password, function (err, result) {
      if (result) {
        const result = createToken(infoFounder);
        return sendReponse(res, {
          message: "Login Successfull",
          status: 200,
          result,
          success: true,
        });
      } else {
        return sendReponse(res, {
          message: "Login Failed",
          status: 200,
          result: null,
          success: true,
        });
      }
    });
  }
  if (!infoFounder) {
    return sendReponse(res, {
      success: false,
      status: 200,
      result: null,
      message: "This user Not Found",
    });
  }
});

const doctorLoginMethod = catchAsyncFun(async (req, res) => {
  const info = req.body;
  const doctFounder = await doctorsModel.findOne({ email: info?.user });
  if (doctFounder) {
    bcrypt.compare(info.password, doctFounder.password, function (err, result) {
      if (result) {
        const result = createToken(doctFounder);
        return sendReponse(res, {
          message: "Login Successfull",
          status: 200,
          result,
          success: true,
        });
      } else {
        return sendReponse(res, {
          message: "Login Failed",
          status: 200,
          result: null,
          success: true,
        });
      }
    });
  }
});
export const authControler = {
  userLoginMethod,
  doctorLoginMethod,
};
