import { Types } from "mongoose";

export type TRefDoctor = {
  refDoctor: string;
  clientId: Types.ObjectId;
};
