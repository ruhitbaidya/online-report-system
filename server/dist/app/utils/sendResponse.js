"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sendReponse = async (res, nessData) => {
    res.status(nessData.status).json({
        success: nessData.success,
        message: nessData.message,
        result: nessData.data,
    });
};
exports.default = sendReponse;
