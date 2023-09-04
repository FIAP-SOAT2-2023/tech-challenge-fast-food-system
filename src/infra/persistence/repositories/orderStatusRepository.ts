import IOrderStatusRepository from "core/domain/repositories/statusRepository";
import { OrderStatus } from "core/domain/entities/orderStatus";
import OrderStatusModel from "../models/orderStatusModel";
export class OrderStatusRepository implements IOrderStatusRepository {

  async addOrderStatus(body: OrderStatus[]): Promise<OrderStatus[]> {
    const createdStatus = await OrderStatusModel.bulkCreate(
      body.map(status => ({
        key: status.key,
        name: status.name,
      }))
    );
  
    return createdStatus;
  }

  async getAllOrderStatus(): Promise<OrderStatus[]> {
    const orderStatus = await OrderStatusModel.findAll({
      attributes: {
        exclude: ["id"],
      },
    });

    return orderStatus;
  }

  async getByKey(key: string): Promise<OrderStatus> {
    const orderStatus = await OrderStatusModel.findOne({
      where: {
        key: key,
      },
    });

    if (!orderStatus) {
      throw new Error("Status não encontrado");
    }

    return orderStatus;
  }
}
