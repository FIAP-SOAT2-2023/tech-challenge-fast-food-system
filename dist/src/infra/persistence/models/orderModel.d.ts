import { Association, CreationOptional, ForeignKey, HasOneCreateAssociationMixin, HasOneGetAssociationMixin, InferAttributes, InferCreationAttributes, Model, NonAttribute } from 'sequelize';
import BasketModel from './basketsModel';
import PaymentModel from './paymentModel';
import OrderStatusModel from './orderStatusModel';
declare class OrderModel extends Model<InferAttributes<OrderModel>, InferCreationAttributes<OrderModel>> {
    id: CreationOptional<number>;
    basketId: ForeignKey<BasketModel['id']>;
    paymentId: ForeignKey<PaymentModel['id']>;
    statusId: ForeignKey<OrderStatusModel['id']>;
    uuid: CreationOptional<string>;
    code: CreationOptional<string>;
    payment?: NonAttribute<PaymentModel>;
    basket?: NonAttribute<BasketModel>;
    status?: NonAttribute<OrderStatusModel>;
    static associations: {
        basket: Association<OrderModel, BasketModel>;
        payment: Association<OrderModel, PaymentModel>;
        status: Association<OrderModel, OrderStatusModel>;
    };
    doneAt: CreationOptional<Date>;
    expected: CreationOptional<Date>;
    createdAt: CreationOptional<Date>;
    updatedAt: CreationOptional<Date>;
    addBasket: HasOneCreateAssociationMixin<BasketModel>;
    getBasket: HasOneGetAssociationMixin<BasketModel>;
}
export default OrderModel;
