import basketsModel from "../models/basketsModel";
import itensModel from "../models/itensModel";
import productsModel from "../models/productsModel";

export default () => {
    // Criação da tabela no banco de dados
    basketsModel.sync();
    itensModel.sync();
    productsModel.sync();
}
