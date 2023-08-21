import OrderModel from 'infra/persistence/models/orderModel';
import addressModel from 'infra/persistence/models/addressModel';
import basketsModel from 'infra/persistence/models/basketsModel';
import customerModel from 'infra/persistence/models/customerModel';
import itensModel from 'infra/persistence/models/itemModel';
import PaymentModel from 'infra/persistence/models/paymentModel';
import productsModel from 'infra/persistence/models/productModel';
import StatusModel from '../models/statusModel';

export default () => {
  // Criação da tabela no banco de dados
  basketsModel.sync();
  itensModel.sync();
  productsModel.sync();
  customerModel.sync();
  addressModel.sync();
  OrderModel.sync();
  PaymentModel.sync();
  StatusModel.sync();
};
