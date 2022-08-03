import dotenv from "dotenv";
dotenv.config();

import express, { Application } from "express";

import appConfig from "./configs/app.config";
import logger from "./helpers/logger.helper";
import requestLogger from "./middlewares/logger.middleware";

const app: Application = express();

app.use(requestLogger());

app.listen(appConfig.port, () => {
  logger.info(`🚀 ${appConfig.name} launched on port ${appConfig.port}`);
});
