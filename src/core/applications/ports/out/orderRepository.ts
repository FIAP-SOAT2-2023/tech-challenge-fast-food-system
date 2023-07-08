import {Order} from "core/domain/order";


export interface IOrderRepository {
  createOrder(orderNew: Order): Promise<Order>;

  getAllPendingOrders(): Promise<Order[]>
}