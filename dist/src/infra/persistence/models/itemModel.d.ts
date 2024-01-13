import { Association, CreationOptional, ForeignKey, HasManyAddAssociationMixin, InferAttributes, InferCreationAttributes, Model, NonAttribute } from 'sequelize';
import BasketModel from './basketsModel';
import ProductModel from './productModel';
declare class ItemModel extends Model<InferAttributes<ItemModel>, InferCreationAttributes<ItemModel>> {
    id: CreationOptional<number>;
    quantity: CreationOptional<number>;
    unitPrice: CreationOptional<number>;
    observations: CreationOptional<string>;
    basketId: ForeignKey<BasketModel['id']>;
    product?: NonAttribute<ProductModel>;
    productId: ForeignKey<ProductModel['id']>;
    addProduct: HasManyAddAssociationMixin<ProductModel, number>;
    createdAt: CreationOptional<Date>;
    updatedAt: CreationOptional<Date>;
    static associations: {
        basketId: Association<ItemModel, BasketModel>;
        productId: Association<ItemModel, ProductModel>;
    };
}
export default ItemModel;
