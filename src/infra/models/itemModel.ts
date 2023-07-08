import Sequelize, {
  Association,
  CreationOptional,
  DataTypes,
  ForeignKey,
  HasManyAddAssociationMixin,
  InferAttributes,
  InferCreationAttributes,
  Model,
  NonAttribute
} from 'sequelize';
import BasketModel from './basketsModel';
import db from "../database/connection";
import Product from './productModel';


class ItemModel extends Model<InferAttributes<ItemModel>, InferCreationAttributes<ItemModel>> {

  declare id: CreationOptional<number>
  declare quantity: CreationOptional<number>
  declare unitPrice: CreationOptional<number>
  declare observations: CreationOptional<string>
  declare basketId: ForeignKey<BasketModel['id']>
  declare product?: NonAttribute<Product>
  declare productId: ForeignKey<Product['id']>
  declare addProduct: HasManyAddAssociationMixin<Product, number>
  declare createdAt: CreationOptional<Date>
  declare updatedAt: CreationOptional<Date>

  declare public static associations: {
    basketId: Association<ItemModel, BasketModel>
    productId: Association<ItemModel, Product>
  }
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
  }, {
    sequelize: db,
    modelName: "Items",
  }
)


Product.hasMany(ItemModel, {
  sourceKey: 'id',
  foreignKey: 'productId',
  as: 'product'
})


export default ItemModel