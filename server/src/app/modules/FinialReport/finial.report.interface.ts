import { Types } from "mongoose";

export type finialReportIterface = {
  clientId: Types.ObjectId;
  doctorsId: Types.ObjectId;
  reportText: string[];
  history: string;
  pasentName: string;
  pasentAge: string;
  pasentGender: string;
  reportId: string;
  refDoctor: Types.ObjectId;
};
