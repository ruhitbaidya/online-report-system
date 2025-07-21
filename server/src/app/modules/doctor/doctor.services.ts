import { doctorsModel } from "./doctor.model";
import { TDoctors } from "./doctorInterface";

const createDoctos = async (data: TDoctors) => {
  const result = await doctorsModel.create(data);
  return result;
};

const getAllDoctors = async () => {
  const result = await doctorsModel.find();
  return result;
};

const deleteDoctor = async (id: string) => {
  const result = await doctorsModel.deleteOne({ _id: id });
  return result;
};
export const doctorsServices = {
  createDoctos,
  getAllDoctors,
  deleteDoctor,
};
