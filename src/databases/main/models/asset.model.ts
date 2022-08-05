import {
  CreationOptional,
  InferAttributes,
  InferCreationAttributes,
  Sequelize,
  Model,
  DataTypes,
  ForeignKey,
} from "sequelize";

export default (sequelize: Sequelize) => {
  class AssetModel extends Model<
    InferAttributes<AssetModel>,
    InferCreationAttributes<AssetModel>
  > {
    declare id: CreationOptional<number>;
    declare asset: string;
    declare userId: ForeignKey<number>;
    declare createdAt: CreationOptional<Date>;
    declare updatedAt: CreationOptional<Date>;
    declare deletedAt: CreationOptional<Date>;
  }

  AssetModel.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      asset: DataTypes.STRING,
      createdAt: DataTypes.DATE,
      updatedAt: DataTypes.DATE,
      deletedAt: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: "asset",
      tableName: "assets",
      timestamps: true,
      paranoid: true,
    }
  );

  return AssetModel;
};
