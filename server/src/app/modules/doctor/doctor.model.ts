import { model, Schema } from "mongoose";
import { TDoctors } from "./doctorInterface";
import bcrypt from "bcrypt";
import { configs } from "../../config/configs";

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

doctorsSchema.pre("save", async function (next) {
  const saltRound = Number(configs.salt_round);
  const passSalt = await bcrypt.hash(this.password, saltRound);
  this.password = passSalt;
  next();
});

export const doctorsModel = model<TDoctors>("doctors", doctorsSchema);
