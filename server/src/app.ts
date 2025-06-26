import express, { application } from "express";
import cors from "cors";
import router from "./app/routers/router";
import globalErrorHandel from "./app/middleware/globalErrorHandel";
import notFound from "./app/middleware/notFound";

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(router);
app.use(globalErrorHandel);
app.use(notFound);
export default app;
