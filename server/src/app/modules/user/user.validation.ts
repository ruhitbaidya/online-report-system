import { z } from "zod";

export const userCreateValidationSchema = z.object({
    industyName : z.string(),
    email : z.string(),
    contactNo : z.string(),
    address : z.string(),
    ownerName : z.string(),
    profileImage : z.string().optional(),
    password : z.string(),
})

export const userUpdateValidationSchema = z.object({
    industyName : z.string().optional(),
    email : z.string().optional(),
    contactNo : z.string().optional(),
    address : z.string().optional(),
    ownerName : z.string().optional(),
    profileImage : z.string().optional(),
    password : z.string().optional(),
})

