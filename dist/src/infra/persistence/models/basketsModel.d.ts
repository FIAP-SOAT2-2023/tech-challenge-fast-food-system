import CustomerModel from './customerModel';
import { Model, InferAttributes, InferCreationAttributes, CreationOptional, NonAttribute, Association, HasManyGetAssociationsMixin, HasManyAddAssociationsMixin, HasManyAddAssociationMixin, ForeignKey, BelongsToCreateAssociationMixin } from 'sequelize';
import ItemModel from './itemModel';
declare class BasketModel extends Model<InferAttributes<BasketModel>, InferCreationAttributes<BasketModel>> {
    id: CreationOptional<number>;
    uuid: CreationOptional<string>;
    isTakeOut: CreationOptional<boolean>;
    totalPrice: CreationOptional<number>;
    customerId?: ForeignKey<CustomerModel['id']>;
    customer?: NonAttribute<CustomerModel>;
    items: NonAttribute<ItemModel[]>;
    static associations: {
        customer: Association<BasketModel, CustomerModel>;
    };
    getItems: HasManyGetAssociationsMixin<ItemModel>;
    addItems: HasManyAddAssociationsMixin<ItemModel, number>;
    addItem: HasManyAddAssociationMixin<ItemModel, 'basketId'>;
    addCustomer: BelongsToCreateAssociationMixin<CustomerModel>;
    createdAt: CreationOptional<Date>;
    updatedAt: CreationOptional<Date>;
}
export default BasketModel;
