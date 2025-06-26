"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const globalErrorHandel_js_1 = __importDefault(require("./app/middleware/globalErrorHandel.js"));
const notFound_js_1 = __importDefault(require("./app/middleware/notFound.js"));
const router_js_1 = __importDefault(require("./app/routers/router.js"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.get("/", (req, res) => {
    res.send("this is me");
});
app.use(router_js_1.default);
app.use(globalErrorHandel_js_1.default);
app.use(notFound_js_1.default);
exports.default = app;
