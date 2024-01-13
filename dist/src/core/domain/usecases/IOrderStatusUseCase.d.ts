import { OrderStatus } from "../entities/orderStatus";
export interface IOrderStatusUseCase {
    addOrderStatus(body: OrderStatus[]): Promise<OrderStatus[]>;
    getAllOrderStatus(): Promise<OrderStatus[]>;
    getByKey(key: string): Promise<OrderStatus>;
}
