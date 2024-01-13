import IOrderStatusRepository from "../../../core/domain/repositories/statusRepository";
import { OrderStatus } from "../../../core/domain/entities/orderStatus";
export declare class OrderStatusRepository implements IOrderStatusRepository {
    addOrderStatus(body: OrderStatus[]): Promise<OrderStatus[]>;
    getAllOrderStatus(): Promise<OrderStatus[]>;
    getByKey(key: string): Promise<OrderStatus>;
}
