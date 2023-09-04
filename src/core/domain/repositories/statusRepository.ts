import { OrderStatus } from "../entities/orderStatus";


export default interface IOrderStatusRepository {
    addOrderStatus(body: OrderStatus[]): Promise<OrderStatus[]>;

    getAllOrderStatus(): Promise<OrderStatus[]>;

    getByKey(key: string): Promise<OrderStatus>;
}