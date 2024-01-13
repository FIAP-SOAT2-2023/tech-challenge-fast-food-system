import {IOrderStatusUseCase} from "../../domain/usecases/IOrderStatusUseCase";
import IOrderStatusRepository from "../../domain/repositories/statusRepository";
import {OrderStatus} from "../../domain/entities/orderStatus";

export class OrderStatusUseCase implements IOrderStatusUseCase {
  constructor(private readonly orderStatusRepository: IOrderStatusRepository) {}
  addOrderStatus(body: OrderStatus[]): Promise<OrderStatus[]> {
    return this.orderStatusRepository.addOrderStatus(body);
  }

  getAllOrderStatus(): Promise<OrderStatus[]> {
    return this.orderStatusRepository.getAllOrderStatus();
  }

  getByKey(key: string): Promise<OrderStatus> {
    return this.orderStatusRepository.getByKey(key);
  }
}
