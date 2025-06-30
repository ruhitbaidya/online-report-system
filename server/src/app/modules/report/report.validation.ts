import { z } from "zod";

export const reportValidationSchema = z.object({
  pasentId: z.string(),
  pasentName: z.string(),
  age: z.string(),
  gender: z.string(),
  testname: z.string(),
  history: z.string(),
  reportImage: z.string(),
  clientId: z.string(),
  doctorId: z.string().optional(),
});
