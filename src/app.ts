import dotenv from "dotenv";
dotenv.config();

import express, { Application } from "express";

import appConfig from "./configs/app.config";
import logger from "./helpers/logger.helper";
import errorHandler from "./middlewares/errorHandler.middleware";
import requestLogger from "./middlewares/logger.middleware";
import routes from "./routes";

import dbMain from "./databases/main";

const app: Application = express();

app.use(express.json());
app.use(requestLogger());

dbMain.sequelize
  .authenticate()
  .then(() => {
    logger.info(`DB Main connected successfully`);
  })
  .catch((error) => {
    logger.error(`Failed to connect to DB Main. Reason :${error.message}`);
  });

app.use(routes);

app.use(errorHandler());

app.listen(appConfig.port, () => {
  logger.info(`🚀 ${appConfig.name} launched on port ${appConfig.port}`);
});
