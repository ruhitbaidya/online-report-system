import catchAsyncFun from "../../utils/catchAsyncFunc";
import sendReponse from "../../utils/sendResponse";
import { uploadImage } from "../../utils/uploadImageCloudinary";
import { userServices } from "./user.services";

const createUser = catchAsyncFun(async (req, res) => {
  const resData = req.body;
  const imageInfo = await uploadImage("ruhit", req.file?.path as string);
  const result = await userServices.createUser({
    ...resData,
    profileImage: (imageInfo as { secure_url: string }).secure_url,
  });
  return sendReponse(res, {
    success: true,
    message: "User Create Successfull",
    status: 200,
    result,
  });
});

const getAllUser = catchAsyncFun(async (req, res) => {
  const result = await userServices.getAllUser();
  sendReponse(res, {
    success: true,
    message: "Get All User",
    status: 200,
    result,
  });
});

const deleteUser = catchAsyncFun(async (req, res) => {
  const ids = req.params.id;
  const result = await userServices.deleteUser(ids);
  sendReponse(res, {
    success: true,
    message: "Delete This User",
    status: 200,
    result,
  });
});
export const userControler = {
  createUser,
  getAllUser,
  deleteUser,
};
