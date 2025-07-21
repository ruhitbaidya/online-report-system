import bcrypt from "bcrypt";
import { model, Schema } from "mongoose";
import { TUser } from "./user.interface";
import { configs } from "../../config/configs";

const userSchema = new Schema<TUser>(
  {
    industyName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    contactNo: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    ownerName: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      default: "user",
    },
    profileImage: {
      type: String,
      default: "",
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

userSchema.pre("save", async function (next) {
  const saltRound = Number(configs.salt_round);
  const saltPass = await bcrypt.hash(this.password, saltRound);
  this.password = saltPass;
  next();
});
export const userModel = model<TUser>("clientUser", userSchema);
