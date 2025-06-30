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
export const reportServices = {
  createReport,
  getAllReports,
};
