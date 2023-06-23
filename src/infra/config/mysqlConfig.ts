import addressModel from "../models/addressModel";
import basketsModel from "../models/basketsModel";
import customerModel from "../models/customerModel";
import itensModel from "../models/itensModel";
import productsModel from "../models/productsModel";

export default () => {
  // Criação da tabela no banco de dados
  basketsModel.sync();
  itensModel.sync();
  productsModel.sync();
  customerModel.sync();
  addressModel.sync();
};
