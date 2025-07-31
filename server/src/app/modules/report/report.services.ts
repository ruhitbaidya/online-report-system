import { TReport } from "./report.interface";
import { reportModel } from "./report.model";

const createReport = async (data: TReport) => {
  const result = await reportModel.create(data);
  return result;
};
const getAllReports = async () => {
  const result = await reportModel.find();
  return result;
};

const aproveOrders = async (ids: { id: { aprId: string; repId: string } }) => {
  console.log(ids);
  const result = await reportModel.findOneAndUpdate(
    { _id: ids?.id?.repId },
    { $set: { doctorsId: ids?.id?.aprId, status: "approve" } }
  );
  console.log(result);
  return result;
};
const deleteReports = async (id: string) => {
  const result = await reportModel.findByIdAndDelete(id);
  return result;
};
export const reportServices = {
  createReport,
  getAllReports,
  deleteReports,
  aproveOrders,
};
