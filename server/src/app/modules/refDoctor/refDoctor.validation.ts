import { z } from "zod";

export const validationRefDoctorValidation = z.object({
  refDoctor: z.string(),
  clientId: z.string(),
});
