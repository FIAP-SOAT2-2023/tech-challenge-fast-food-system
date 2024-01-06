import Sequelize, {
  Association,
  CreationOptional,
  DataTypes,
  ForeignKey,
  HasManyAddAssociationMixin,
  HasOneCreateAssociationMixin,
  HasOneGetAssociationMixin,
  InferAttributes,
  InferCreationAttributes,
  Model,
  NonAttribute,
} from "sequelize";
import BasketModel from "./basketsModel";
import db from "../database/connection";

import OrderStatusModel from "./orderStatusModel";

class OrderModel extends Model<
  InferAttributes<OrderModel>,
  InferCreationAttributes<OrderModel>
> {
  declare id: CreationOptional<number>;
  declare basketId: ForeignKey<BasketModel["id"]>;

  declare statusId: ForeignKey<OrderStatusModel["id"]>;
  declare uuid: CreationOptional<string>;
  declare code: CreationOptional<string>;
  declare paymentId: CreationOptional<number>;
  declare basket?: NonAttribute<BasketModel>;
  declare status?: NonAttribute<OrderStatusModel>;
  public declare static associations: {
    basket: Association<OrderModel, BasketModel>;

    status: Association<OrderModel, OrderStatusModel>;
  };
  declare doneAt: CreationOptional<Date>;
  declare expected: CreationOptional<Date>;
  declare createdAt: CreationOptional<Date>;
  declare updatedAt: CreationOptional<Date>;

  declare addBasket: HasOneCreateAssociationMixin<BasketModel>;
  declare getBasket: HasOneGetAssociationMixin<BasketModel>;
}

OrderModel.init(
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
    code: {
      type: DataTypes.STRING,
      primaryKey: false,
      allowNull: false,
    },
    paymentId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    doneAt: { type: DataTypes.DATE, allowNull: true },
    expected: { type: DataTypes.DATE },
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
  },
  {
    sequelize: db,
    modelName: "Orders",
  }
);

OrderModel.belongsTo(OrderStatusModel, {
  targetKey: "id",
  foreignKey: "statusId",
  as: "status",
});
OrderModel.belongsTo(BasketModel, { targetKey: "id", foreignKey: "basketId" });

export default OrderModel;
