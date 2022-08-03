import morgan, { StreamOptions } from "morgan";
import { RequestHandler } from "express";

import logger from "../helpers/logger.helper";

const stream: StreamOptions = {
  write: (message) => logger.http(message.replace(/(?:\r\n|\r|\n)/g, "")),
};

function requestLogger(): RequestHandler {
  const format = ":method :url | HTTP :status in :response-time ms";
  return morgan(format, { stream });
}

export default requestLogger;
