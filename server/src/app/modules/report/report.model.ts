import { model, Schema } from "mongoose";
import { TReport } from "./report.interface";

const reportSchema = new Schema<TReport>(
  {
    pasentId: {
      type: String,
      required: true,
    },
    pasentName: {
      type: String,
      required: true,
    },
    age: {
      type: String,
      requred: true,
    },
    gender: {
      type: String,
      enum: ["male", "female", "others"],
      required: true,
    },
    producer: {
      type: [String],
      default: [],
      required: true,
    },
    history: {
      type: String,
      required: true,
    },
    reportImage: {
      type: [String],
      default: [],
      required: true,
    },
    isDelete: {
      type: Boolean,
      default: false,
    },
    clientId: {
      type: Schema.ObjectId,
      required: true,
    },
    doctorsId: {
      type: Schema.ObjectId,
      default: null,
    },
    status: {
      type: String,
      default: "pendding",
    },
  },
  { timestamps: true }
);

export const reportModel = model<TReport>("report", reportSchema);
