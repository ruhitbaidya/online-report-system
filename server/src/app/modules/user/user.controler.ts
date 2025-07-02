import catchAsyncFun from "../../utils/catchAsyncFunc";
import sendReponse from "../../utils/sendResponse";
import { userServices } from "./user.services";

const createUser = catchAsyncFun(async (req, res) => {
  const resData = req.body;
  console.log(resData);
  // const result = await userServices.createUser(resData)
  // return sendReponse(res, {success : true, message : "User Create Successfull", status : 200, data : result})
});

const getAllUser = catchAsyncFun(async (req, res) => {
  const result = await userServices.getAllUser();
  sendReponse(res, {
    success: true,
    message: "Get All User",
    status: 200,
    data: result,
  });
});

export const userControler = {
  createUser,
  getAllUser,
};
