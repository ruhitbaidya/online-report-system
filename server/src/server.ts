import mongoose from "mongoose";
import { configs } from "./app/config/configs";
import app from "./app";

const startServer = async () => {
  try {
    await mongoose.connect(configs.db_url as string);
    console.log("Connect Your  Database");
    app.listen(configs.port, () => {
      console.log("Connect This Server");
    });
  } catch (err) {
    console.error(err);
    process.exit();
  }
};

startServer();
