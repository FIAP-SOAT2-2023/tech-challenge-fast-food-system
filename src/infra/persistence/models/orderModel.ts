import Sequelize, {
    Association,
    CreationOptional,
    DataTypes,
    ForeignKey,
    HasManyAddAssociationMixin,
    HasOneCreateAssociationMixin, HasOneGetAssociationMixin,
    InferAttributes,
    InferCreationAttributes,
    Model,
    NonAttribute
} from 'sequelize';
import BasketModel from './basketsModel';
import db from "../database/connection";
import PaymentModel from './paymentModel';
import OrderStatusModel from './orderStatusModel';

class OrderModel extends Model<InferAttributes<OrderModel>, InferCreationAttributes<OrderModel>> {

    declare id: CreationOptional<number>
    declare basketId: ForeignKey<BasketModel['id']>
    declare paymentId: ForeignKey<PaymentModel['id']>
    declare statusId: ForeignKey<OrderStatusModel['id']>
    declare uuid: CreationOptional<string>
    declare code: CreationOptional<string>    
    declare payment?: NonAttribute<PaymentModel>
    declare basket?: NonAttribute<BasketModel>
    declare status?: NonAttribute<OrderStatusModel>
    declare public static associations: {
        basket: Association<OrderModel, BasketModel>
        payment: Association<OrderModel, PaymentModel>
        status: Association<OrderModel, OrderStatusModel>
    }
    declare doneAt: CreationOptional<Date>
    declare expected: CreationOptional<Date>
    declare createdAt: CreationOptional<Date>
    declare updatedAt: CreationOptional<Date>

    declare addBasket: HasOneCreateAssociationMixin<BasketModel>;
    declare getBasket: HasOneGetAssociationMixin<BasketModel>;
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
    code: {
        type: DataTypes.STRING,
        primaryKey: false,
        allowNull: false
    },
    doneAt: { type: DataTypes.DATE,allowNull: true  },
    expected: { type: DataTypes.DATE },
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE
}, {
    sequelize: db,
    modelName: "Orders",
})

OrderModel.belongsTo(OrderStatusModel, {targetKey: 'id', foreignKey: 'statusId'})
OrderModel.belongsTo(BasketModel, {targetKey: 'id', foreignKey: 'basketId'})
OrderModel.belongsTo(PaymentModel, {targetKey: 'id', foreignKey: 'paymentId'})

export default OrderModel;