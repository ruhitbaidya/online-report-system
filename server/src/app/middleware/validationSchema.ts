import { NextFunction, Request, Response } from "express";
import { AnyZodObject } from "zod";



export const validationSchema = (data : AnyZodObject)=>{
    return async (req:Request, res:Response, next:NextFunction)=>{
        try{
            await data.parseAsync(req.body);
            next()
        }catch(err){
            next(err)
        }
    }
}