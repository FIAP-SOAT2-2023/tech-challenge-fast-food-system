
import { Order } from 'core/domain/entities/order';
import { IOrderRepository } from 'core/domain/repositories/orderRepository';
import { IOrderUseCase } from 'core/domain/usecases/IOrderUseCase';

export class OrderUseCase implements IOrderUseCase {
    constructor(private readonly orderRepository: IOrderRepository) {}

    updateOrderById(id: string, body: Order): Promise<Order> {
        return this.orderRepository.updateOrderById(id, body);
    }
}
