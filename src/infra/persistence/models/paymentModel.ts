import db from "../database/connection";
import { Model, InferAttributes, InferCreationAttributes, CreationOptional, NonAttribute, Association, DataTypes, UUIDV4, UUID, Sequelize } from 'sequelize';
import BasketModel from "./basketsModel";


class PaymentModel extends Model<InferAttributes<PaymentModel>, InferCreationAttributes<PaymentModel>>{

    declare id: CreationOptional<number>
    
    declare uuid: CreationOptional<string>

    declare basket: NonAttribute<BasketModel>

    declare status: CreationOptional<string>

    declare paidAt: CreationOptional<Date>

    declare nsu: CreationOptional<string>

    declare qrCode: CreationOptional<string>

    declare public static associations: { 
        basket: Association<PaymentModel, BasketModel>
     };

    declare createdAt: CreationOptional<Date>
    declare updatedAt: CreationOptional<Date>
}

PaymentModel.init({
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
      status: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: "PENDING"
      },
      nsu: {
        type: DataTypes.STRING,
        allowNull: true
      },
      qrCode: {
        type: DataTypes.STRING,
        allowNull: true
      },
      paidAt: { type: DataTypes.DATE},
      createdAt: DataTypes.DATE,
      updatedAt: DataTypes.DATE,
},
{
  sequelize: db,
  modelName: "Payments",
})

export default PaymentModel