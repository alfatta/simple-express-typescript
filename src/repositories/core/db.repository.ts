import { Transaction } from "sequelize";
import { QueryOptions } from "sequelize";

export default class DBRepository {
  static options: QueryOptions = {};

  constructor(t: Transaction | null) {
    if (t) {
      DBRepository.options.transaction = t;
    }
  }
}
