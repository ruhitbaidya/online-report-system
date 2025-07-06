import { Response } from "express";
import { TSendResponse } from "../types/types.all";

const sendReponse = async <T>(res: Response, nessData: TSendResponse<T>) => {
  res.status(nessData.status).json({
    success: nessData.success,
    message: nessData.message,
    result: nessData?.result,
  });
};

export default sendReponse;
