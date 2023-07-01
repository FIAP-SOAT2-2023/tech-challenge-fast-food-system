import CustomerModel from './customerModel';
import db from "../database/connection";
import { Model, InferAttributes, InferCreationAttributes, CreationOptional, NonAttribute, Association, DataTypes, UUIDV4, UUID, HasManyGetAssociationsMixin, HasManyAddAssociationsMixin, HasManyAddAssociationMixin, ForeignKey, BelongsToCreateAssociationMixin } from 'sequelize';
import { Item } from '../../core/domain/item';
import ItemModel from './itemModel';
import { Payment } from 'core/domain/payment';
import PaymentModel from './paymentModel';


class BasketModel extends Model<InferAttributes<BasketModel>, InferCreationAttributes<BasketModel>>{

  declare id: CreationOptional<number>
  declare uuid: CreationOptional<string>
  declare isTakeOut: CreationOptional<boolean>
  declare totalPrice: CreationOptional<number>
  

  declare customerId?: ForeignKey<CustomerModel['id']>

  declare customer?: NonAttribute<CustomerModel>

  declare payment?: NonAttribute<PaymentModel>

  declare paymentId?: ForeignKey<PaymentModel['id']>

  declare items: NonAttribute<ItemModel[]>

  declare public static associations: { 
    //customerId: Association<BasketModel, CustomerModel>,
    //items: Association<BasketModel, Item>
    customer: Association<BasketModel, CustomerModel>
    payment: Association<BasketModel, PaymentModel>
  };

  declare getItems: HasManyGetAssociationsMixin<ItemModel>
  declare addItems: HasManyAddAssociationsMixin<ItemModel, number>

  declare addItem: HasManyAddAssociationMixin<ItemModel, 'basketId'>


  declare addCustomer: BelongsToCreateAssociationMixin<CustomerModel>

  declare createPayment: BelongsToCreateAssociationMixin<PaymentModel>


  //declare getCustomer: HasManyGetAssociationsMixin

 
  
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

BasketModel.hasMany(ItemModel, {
  sourceKey: 'id',
  foreignKey: 'basketId',
  as: 'items'
})

CustomerModel.hasMany(BasketModel, {
  sourceKey: 'id',
  foreignKey: 'customerId',
  as: 'customer'
})


BasketModel.belongsTo(PaymentModel, { targetKey: 'id' })

BasketModel.belongsTo(CustomerModel, {targetKey: 'id'})

export default BasketModel;
