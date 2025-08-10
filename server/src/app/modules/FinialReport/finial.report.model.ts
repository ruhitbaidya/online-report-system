import { model, Schema } from "mongoose";
import { finialReportIterface } from "./finial.report.interface";

const finialReportSchema = new Schema<finialReportIterface>({
  clientId: {
    type: Schema.ObjectId,
    required: true,
  },
  doctorsId: {
    type: Schema.ObjectId,
    required: true,
  },
  reportText: {
    type: [String],
    required: true,
  },
  history: {
    type: String,
    required: true,
  },
  pasentName: {
    type: String,
    required: true,
  },
  pasentAge: {
    type: String,
    required: true,
  },
  pasentGender: {
    type: String,
    required: true,
  },
  reportId: {
    type: String,
    required: true,
  },
  refDoctor: {
    type: Schema.ObjectId,
    required: true,
  },
});

export const finialReportModel = model<finialReportIterface>(
  "finialReport",
  finialReportSchema
);
