import {
  CreationOptional,
  InferAttributes,
  InferCreationAttributes,
  Sequelize,
  Model,
  DataTypes,
} from "sequelize";

export default (sequelize: Sequelize) => {
  class UserModel extends Model<
    InferAttributes<UserModel>,
    InferCreationAttributes<UserModel>
  > {
    declare id: CreationOptional<number>;
    declare name: string;
    declare email: string;
    declare createdAt: CreationOptional<Date>;
    declare updatedAt: CreationOptional<Date>;
    declare deletedAt: CreationOptional<Date>;
  }

  UserModel.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      createdAt: DataTypes.DATE,
      updatedAt: DataTypes.DATE,
      deletedAt: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: "user",
      tableName: "users",
      timestamps: true,
      paranoid: true,
    }
  );

  return UserModel;
};
