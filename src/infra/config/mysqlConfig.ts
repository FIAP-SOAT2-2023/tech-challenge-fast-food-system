import addressModel from "../models/addressModel";
import basketsModel from "../models/basketsModel";
import customerModel from "../models/customerModel";
import itensModel from "../models/itemModel";
import productsModel from "../models/productModel";

export default () => {
  // Criação da tabela no banco de dados
  basketsModel.sync();
  itensModel.sync();
  productsModel.sync();
  customerModel.sync();
  addressModel.sync();
};
