import { Model, InferAttributes, InferCreationAttributes, CreationOptional, NonAttribute, Association } from 'sequelize';
import BasketModel from "./basketsModel";
declare class PaymentModel extends Model<InferAttributes<PaymentModel>, InferCreationAttributes<PaymentModel>> {
    id: CreationOptional<number>;
    uuid: CreationOptional<string>;
    basket: NonAttribute<BasketModel>;
    status: CreationOptional<string>;
    paidAt: CreationOptional<Date>;
    nsu: CreationOptional<string>;
    qrCode: CreationOptional<string>;
    static associations: {
        basket: Association<PaymentModel, BasketModel>;
    };
    createdAt: CreationOptional<Date>;
    updatedAt: CreationOptional<Date>;
}
export default PaymentModel;
