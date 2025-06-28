import { z } from "zod";


export const userValidationSchema = z.object({
    industyName : z.string(),
    email : z.string(),
    contactNo : z.string(),
    address : z.string(),
    ownerName : z.string(),
    profileImage : z.string().optional(),
    password : z.string(),
})

