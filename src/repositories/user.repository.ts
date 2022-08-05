import dbMain from "../databases/main";
import DBRepository from "./core/db.repository";

export default class UserRepository extends DBRepository {
  static async getAllUser() {
    return await dbMain.user.findAndCountAll({
      include: [{ model: dbMain.asset }],
    });
  }
  static async getUserById(id: number) {
    return await dbMain.user.findByPk(id);
  }
  static async insertUser(data: { name: string; email: string }) {
    return await dbMain.user.create(data, this.options);
  }
  static async insertAsset(data: { userId: number; asset: string }) {
    return await dbMain.asset.create(data, this.options);
  }
}
