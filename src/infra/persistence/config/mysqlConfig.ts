import addressModel from "infra/persistence/models/addressModel";
import customerModel from "infra/persistence/models/customerModel";

export default () => {
  // Criação da tabela no banco de dados

  customerModel.sync();
  addressModel.sync();
};
