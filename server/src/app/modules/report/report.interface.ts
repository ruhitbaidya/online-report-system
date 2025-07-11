import { Types } from "mongoose";

export type TReport = {
  pasentId: string;
  pasentName: string;
  age: string;
  gender: "male" | "female" | "others";
  testName: string;
  history: string;
  reportImage: string;
  isDelete?: boolean;
  clientId: Types.ObjectId;
  doctorsId?: Types.ObjectId;
};
