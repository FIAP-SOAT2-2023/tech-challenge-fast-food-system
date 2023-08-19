import { Order } from "core/domain/entities/order";
import { IOrderRepository } from "core/domain/repositories/orderRepository";
import { IOrderUseCase } from "core/domain/usecases/IOrderUseCase";


export class OrderUseCase implements IOrderUseCase {

    constructor(
        private readonly orderRepository: IOrderRepository,
    ) {}

    async getAllOrder(): Promise<Order[]> {
        return new Promise<Order[]> (async (resolve) => {
            const orderList = await this.orderRepository.getAllOrder()
            resolve(orderList)
        });
    }
}