import { Model, InferAttributes, InferCreationAttributes, CreationOptional } from 'sequelize';
declare class OrderStatusModel extends Model<InferAttributes<OrderStatusModel>, InferCreationAttributes<OrderStatusModel>> {
    id: CreationOptional<number>;
    uuid: CreationOptional<string>;
    key: CreationOptional<string>;
    name: CreationOptional<string>;
}
export default OrderStatusModel;
