"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const configs_js_1 = require("./app/config/configs.js");
const app_js_1 = __importDefault(require("./app.js"));
const startServer = async () => {
    try {
        await mongoose_1.default.connect(configs_js_1.configs.db_url);
        console.log("Connect Your  Database");
        app_js_1.default.listen(configs_js_1.configs.port, () => {
            console.log("Connect This Server");
        });
    }
    catch (err) {
        console.error(err);
        process.exit();
    }
};
startServer();
