import { Sequelize } from "sequelize";

import { dbMainConfig } from "../../configs/db.config";
import UserModel from "./models/user.model";
import AssetModel from "./models/asset.model";

const sequelize = new Sequelize(dbMainConfig);

const dbMain = {
  sequelize,
  Sequelize,
  user: UserModel(sequelize),
  asset: AssetModel(sequelize),
};

dbMain.asset.belongsTo(dbMain.user);
dbMain.user.hasMany(dbMain.asset);

export default dbMain;
