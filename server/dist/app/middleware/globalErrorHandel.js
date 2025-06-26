"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const globalErrorHandel = async (err, req, res, next) => {
    const statusCode = 500;
    const message = err.message;
    const errorSource = err;
    res.status(statusCode).json({
        success: false,
        message,
        errorSource,
        error: err,
    });
};
exports.default = globalErrorHandel;
