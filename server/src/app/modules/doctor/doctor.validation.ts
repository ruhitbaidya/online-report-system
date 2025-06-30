import { z } from "zod";

export const doctorsValidationSchema = z.object({
  name: z.string(),
  degree: z.string(),
  email: z.string(),
  address: z.string(),
  gender: z.string(),
  contactNo: z.string(),
  profileImage: z.string(),
  password: z.string(),
});
