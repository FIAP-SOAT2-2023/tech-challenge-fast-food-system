import { Order } from "../entities/order";
export interface IOrderRepository {
    createOrder(orderNew: Order): Promise<Order>;
    getAllPendingOrders(): Promise<Order[]>;
    updateOrderById(id: string, body: Order): Promise<Order>;
}
