import Sequelize, { Association, CreationOptional, DataTypes, ForeignKey, InferAttributes, InferCreationAttributes, Model, NonAttribute } from 'sequelize';
import BasketModel from './basketsModel';
import db from "../database/connection";


class ItemModel extends Model<InferAttributes<ItemModel>, InferCreationAttributes<ItemModel>> {

  declare id: CreationOptional<number> 

  declare quantity: CreationOptional<number>

  declare unitPrice: CreationOptional<number>

  declare observations: CreationOptional<string>

  declare basketId: ForeignKey<BasketModel['id']>

  declare public static associations: { 

    basketId: Association<ItemModel, BasketModel>

  }

  declare createdAt: CreationOptional<Date>
  declare updatedAt: CreationOptional<Date>
}


ItemModel.init({
  id: {
    type: DataTypes.INTEGER.UNSIGNED,
    autoIncrement: true,
    primaryKey: true
  },
  quantity: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  unitPrice: {
    type: Sequelize.FLOAT,
    allowNull: false
  },
  observations: {
    type: Sequelize.STRING,
    allowNull: true
  },
  createdAt: DataTypes.DATE,
  updatedAt: DataTypes.DATE
},{
  sequelize: db,
  modelName: "Items",
}
)


export default ItemModel