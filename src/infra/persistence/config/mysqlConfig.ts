
import OrderStatusModel from '../models/orderStatusModel';
import basketsModel from "../models/basketsModel";
import customerModel from "../models/customerModel";
import addressModel from "../models/addressModel";
import OrderModel from "../models/orderModel";
import PaymentModel from "../models/paymentModel";
import ItemModel from "../models/itemModel";

export default () => {
  // Criação da tabela no banco de dados
  basketsModel.sync();
  ItemModel.sync();
  PaymentModel.sync();
  customerModel.sync();
  addressModel.sync();
  OrderModel.sync();
  PaymentModel.sync();
  OrderStatusModel.sync();
};
