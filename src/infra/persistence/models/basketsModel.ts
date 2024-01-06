import db from "../database/connection";
import {
  Model,
  InferAttributes,
  InferCreationAttributes,
  CreationOptional,
  NonAttribute,
  Association,
  DataTypes,
  UUIDV4,
  UUID,
  HasManyGetAssociationsMixin,
  HasManyAddAssociationsMixin,
  HasManyAddAssociationMixin,
  ForeignKey,
  BelongsToCreateAssociationMixin,
  Sequelize,
} from "sequelize";
import ItemModel from "./itemModel";

class BasketModel extends Model<
  InferAttributes<BasketModel>,
  InferCreationAttributes<BasketModel>
> {
  declare id: CreationOptional<number>;
  declare uuid: CreationOptional<string>;
  declare isTakeOut: CreationOptional<boolean>;
  declare totalPrice: CreationOptional<number>;
  declare customerId?: CreationOptional<string>;
  declare items: NonAttribute<ItemModel[]>;

  declare getItems: HasManyGetAssociationsMixin<ItemModel>;
  declare addItems: HasManyAddAssociationsMixin<ItemModel, number>;
  declare addItem: HasManyAddAssociationMixin<ItemModel, "basketId">;

  declare createdAt: CreationOptional<Date>;
  declare updatedAt: CreationOptional<Date>;
}

BasketModel.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    uuid: {
      type: DataTypes.UUID,
      primaryKey: true,
      allowNull: false,
      defaultValue: DataTypes.UUIDV4,
    },
    isTakeOut: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    totalPrice: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    customerId: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
  },
  {
    sequelize: db,
    modelName: "Basket",
  }
);

BasketModel.hasMany(ItemModel, {
  sourceKey: "id",
  foreignKey: "basketId",
  as: "items",
});

export default BasketModel;
