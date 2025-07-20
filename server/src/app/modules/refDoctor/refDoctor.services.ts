import { TRefDoctor } from "./refDoctor.interface";
import { refDoctorModel } from "./refDoctor.model";

const createRefDoctor = async (doctor: TRefDoctor) => {
  const result = await refDoctorModel.create(doctor);
  return result;
};

const refDoctorEdit = async (id: string, refDoctor: string) => {
  const result = await refDoctorModel.findByIdAndUpdate(id, { refDoctor });
  return result;
};

const getAllrefDoctor = async (id: string) => {
  const result = await refDoctorModel.findById({ clientId: id });
  return result;
};

export const refDoctorServices = {
  createRefDoctor,
  refDoctorEdit,
  getAllrefDoctor,
};
