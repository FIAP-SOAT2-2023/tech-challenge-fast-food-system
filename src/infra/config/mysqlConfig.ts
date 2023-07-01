import addressModel from 'infra/models/addressModel';
import basketsModel from 'infra/models/basketsModel';
import customerModel from 'infra/models/customerModel';
import itensModel from 'infra/models/itemModel';
import productsModel from 'infra/models/productModel';

export default () => {
  // Criação da tabela no banco de dados
  basketsModel.sync();
  itensModel.sync();
  productsModel.sync();
  customerModel.sync();
  addressModel.sync();
};
