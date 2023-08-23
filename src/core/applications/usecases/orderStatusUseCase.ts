
import { OrderStatus } from 'core/domain/entities/orderStatus';
import IOrderStatusRepository from 'core/domain/repositories/statusRepository';
import { IOrderStatusUseCase } from 'core/domain/usecases/IOrderStatusUseCase';

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
