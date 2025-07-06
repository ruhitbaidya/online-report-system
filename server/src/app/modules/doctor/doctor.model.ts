import { model, Schema } from "mongoose";
import { TDoctors } from "./doctorInterface";

const doctorsSchema = new Schema<TDoctors>(
  {
    name: {
      type: String,
      requred: true,
    },
    degree: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      default: "doctor",
    },
    addrese: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    gender: {
      type: String,
      enum: ["male", "female", "others"],
      required: true,
    },
    contactNo: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    isDelete: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

export const doctorsModel = model<TDoctors>("doctors", doctorsSchema);
