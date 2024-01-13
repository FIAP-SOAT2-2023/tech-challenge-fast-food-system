import {IOrderUseCase} from "../../domain/usecases/IOrderUseCase";
import {IOrderRepository} from "../../domain/repositories/orderRepository";
import {Order} from "../../domain/entities/order";

export class OrderUseCase implements IOrderUseCase {
    constructor(private readonly orderRepository: IOrderRepository) {}

    updateOrderById(id: string, body: Order): Promise<Order> {
        return this.orderRepository.updateOrderById(id, body);
    }
}
