import { Options } from "sequelize";
import logger from "../helpers/logger.helper";

const dbMainConfig: Options = {
  dialect: "mysql",
  host: process.env.DB_MAIN_HOST || "",
  database: process.env.DB_MAIN_NAME || "",
  username: process.env.DB_MAIN_USER || "",
  password: process.env.DB_MAIN_PASS || "",
  pool: {
    max: 20,
    idle: 30000,
  },
  define: {
    timestamps: false,
  },
  dialectOptions: {
    timezone: process.env.DB_MAIN_TIMEZONE || "+07:00",
  },
  query: {
    raw: false,
  },
  logging: (str) => {
    if (process.env.NODE_ENV !== "production") {
      logger.verbose(str);
    }
  },
};

export { dbMainConfig };
