import dotenv from "dotenv";
dotenv.config();

import express, { Application } from "express";

import appConfig from "./configs/app.config";

const app: Application = express();

app.listen(appConfig.port, () => {
  console.log(`🚀 ${appConfig.name} launched on port ${appConfig.port}`);
});
