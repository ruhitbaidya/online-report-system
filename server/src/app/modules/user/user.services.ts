import { TUser } from "./user.interface";
import { userModel } from "./user.model";

const createUser = async (resdata: TUser) => {
  const result = await userModel.create(resdata);
  return result;
};

const getAllUser = async () => {
  const result = await userModel.find();
  return result;
};

const deleteUser = async (id: string) => {
  const result = await userModel.deleteOne({ _id: id });
  return result;
};
export const userServices = {
  createUser,
  getAllUser,
  deleteUser,
};
