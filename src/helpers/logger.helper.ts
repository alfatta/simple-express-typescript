import moment from "moment";
import winston, { Logger } from "winston";
import "winston-daily-rotate-file";
import logConfig from "../configs/log.config";

const logger: Logger = winston.createLogger({
  level: logConfig.level,
  format: winston.format.printf(({ level, message }) => {
    const logTime = moment().toISOString();
    return `[${level.toUpperCase()}] ${logTime} | ${message}`;
  }),
  transports: [
    new winston.transports.Console(),
    new winston.transports.DailyRotateFile({
      dirname: "logs",
      filename: "application-%DATE%.log",
      maxSize: "1g",
      maxFiles: "14d",
    }),
  ],
});

export default logger;
