import { IOrderUseCase } from "../../domain/usecases/IOrderUseCase";
import { IOrderRepository } from "../../domain/repositories/orderRepository";
import { Order } from "../../domain/entities/order";
export declare class OrderUseCase implements IOrderUseCase {
    private readonly orderRepository;
    constructor(orderRepository: IOrderRepository);
    updateOrderById(id: string, body: Order): Promise<Order>;
}
