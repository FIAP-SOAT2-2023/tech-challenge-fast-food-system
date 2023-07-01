import Sequelize, { Association, CreationOptional, DataTypes, ForeignKey, HasManyAddAssociationMixin, InferAttributes, InferCreationAttributes, Model, NonAttribute } from 'sequelize';
import BasketModel from './basketsModel';
import db from "../database/connection";
import PaymentModel from './paymentModel';

class OrderModel extends Model<InferAttributes<OrderModel>, InferCreationAttributes<OrderModel>> {

    declare id: CreationOptional<number>

    declare basketId: ForeignKey<BasketModel['id']>

    declare paymentId: ForeignKey<PaymentModel['id']>

    declare uuid: CreationOptional<string>

    declare payment: NonAttribute<PaymentModel>

    declare basket: NonAttribute<BasketModel>

    declare status: CreationOptional<string>

    declare public static associations: {

        basket: Association<OrderModel, BasketModel>
        payment: Association<OrderModel, PaymentModel>

    }

    declare doneAt: CreationOptional<Date>
    declare expected: CreationOptional<Date>
    declare createdAt: CreationOptional<Date>
    declare updatedAt: CreationOptional<Date>

}


OrderModel.init({
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
    status: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: "PENDING"
    },
    doneAt: { type: DataTypes.DATE,allowNull: true  },
    expected: { type: DataTypes.DATE },
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE
}, {
    sequelize: db,
    modelName: "Orders",
})



OrderModel.belongsTo(BasketModel, {targetKey: 'id'})
OrderModel.belongsTo(PaymentModel, {targetKey: 'id'})

export default OrderModel;