import CustomerModel from './customerModel';
import db from "../database/connection";
import { Model, InferAttributes, InferCreationAttributes, CreationOptional, NonAttribute, Association, DataTypes, UUIDV4, UUID } from 'sequelize';
import { Item } from '../../core/domain/item';


class BasketModel extends Model<InferAttributes<BasketModel>, InferCreationAttributes<BasketModel>>{

  declare id: CreationOptional<number>
  declare uuid: CreationOptional<string>
  declare isTakeOut: CreationOptional<boolean>
  declare totalPrice: CreationOptional<number>

  declare customer: NonAttribute<CustomerModel>
  //declare items: NonAttribute<Item[]>

  declare public static associations: { 
    customer: Association<BasketModel, CustomerModel>,
    //items: Association<BasketModel, Item>
  };

  
  declare createdAt: CreationOptional<Date>
  declare updatedAt: CreationOptional<Date>
}

BasketModel.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true
    },
    uuid: {
      type: DataTypes.UUID,
      primaryKey: true,
      allowNull: false,
      defaultValue:  DataTypes.UUIDV4
    },
    isTakeOut: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    totalPrice: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
},
{
  sequelize: db,
  modelName: "Basket",
})

//Bas


/*
interface BasketAttributes {
  uuid?: string;
  customer: CustomerModel,
  isTakeOut: boolean,
  totalPrice: number
}

class BasketModel extends Model<BasketAttributes> implements BasketAttributes {
  public uuid?: string | undefined;
  public customer!: CustomerModel;
  public isTakeOut!: boolean;
  public totalPrice!: number;

}

BasketModel.init(
  {
  uuid: {
    type: Sequelize.UUID,
    primaryKey: true,
    allowNull: false,
  },
  customer: {
    type: CustomerModel,
    allowNull: false,
  }
  totalPrice: {
    type: Sequelize.FLOAT,
    allowNull: false,
  },
},
{
  sequelize: db,
  modelName: "Customer",
})
*/
export default BasketModel;
