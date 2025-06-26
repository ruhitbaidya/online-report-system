"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const doctor_router_js_1 = require("../modules/doctor/doctor.router.js");
const app_js_1 = __importDefault(require("../../app.js"));
const router = express_1.default.Router();
const makeRouter = [
    {
        path: "/",
        element: doctor_router_js_1.doctorRouter,
    },
];
makeRouter.forEach((item) => app_js_1.default.use(item.path, item.element));
exports.default = router;
