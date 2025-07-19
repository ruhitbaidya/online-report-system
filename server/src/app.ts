import express, { application } from "express";
import cors from "cors";
import router from "./app/routers/router";
import globalErrorHandel from "./app/middleware/globalErrorHandel";
import notFound from "./app/middleware/notFound";
import path from "path";

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(router);
app.use(globalErrorHandel);
app.use(notFound);
app.use('/upload', express.static(path.join(__dirname, 'upload')));
export default app;
