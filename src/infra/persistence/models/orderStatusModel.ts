import db from "../database/connection";
import { Model, InferAttributes, InferCreationAttributes, CreationOptional, DataTypes } from 'sequelize';


class OrderStatusModel extends Model<InferAttributes<OrderStatusModel>, InferCreationAttributes<OrderStatusModel>>{

    declare id: CreationOptional<number>
    declare uuid: CreationOptional<string>
    declare key: CreationOptional<string>
    declare name: CreationOptional<string>
}

OrderStatusModel.init({
  id: {
    type: DataTypes.INTEGER.UNSIGNED,
    autoIncrement: true,
    primaryKey: true
  },
  uuid: {
    type: DataTypes.UUID,
    primaryKey: true,
    allowNull: false,
    defaultValue: DataTypes.UUIDV4
  },
  key: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  }
},
{
  sequelize: db,
  modelName: "OrderStatus",
})

export default OrderStatusModel