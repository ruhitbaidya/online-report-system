import { model, Schema } from "mongoose";
import { TRefDoctor } from "./refDoctor.interface";

const refDoctorSchema = new Schema<TRefDoctor>(
  {
    refDoctor: {
      type: String,
      required: true,
    },
    clientId: {
      type: Schema.ObjectId,
      required: true,
    },
  },
  { timestamps: true }
);

export const refDoctorModel = model<TRefDoctor>("refDoctor", refDoctorSchema);
