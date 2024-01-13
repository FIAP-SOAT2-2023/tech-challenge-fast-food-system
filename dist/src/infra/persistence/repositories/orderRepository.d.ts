import { IOrderRepository } from "../../../core/domain/repositories/orderRepository";
import { Order } from "../../../core/domain/entities/order";
export declare class OrderRepository implements IOrderRepository {
    createOrder(orderNew: Order): Promise<Order>;
    getAllPendingOrders(): Promise<Order[]>;
    updateOrderById(id: string, body: Order): Promise<Order>;
}
