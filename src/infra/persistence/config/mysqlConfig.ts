import OrderModel from "infra/persistence/models/orderModel";
import basketsModel from "infra/persistence/models/basketsModel";
import itensModel from "infra/persistence/models/itemModel";
import OrderStatusModel from "../models/orderStatusModel";

export default () => {
  // Criação da tabela no banco de dados
  basketsModel.sync();
  itensModel.sync();
  OrderModel.sync();
  OrderStatusModel.sync();
};
