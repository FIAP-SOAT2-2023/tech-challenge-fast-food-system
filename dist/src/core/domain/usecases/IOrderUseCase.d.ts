import { Order } from "../entities/order";
export interface IOrderUseCase {
    updateOrderById(id: string, body: Order): Promise<Order>;
}
