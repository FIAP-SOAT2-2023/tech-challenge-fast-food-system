import { IOrderStatusUseCase } from "../../domain/usecases/IOrderStatusUseCase";
import IOrderStatusRepository from "../../domain/repositories/statusRepository";
import { OrderStatus } from "../../domain/entities/orderStatus";
export declare class OrderStatusUseCase implements IOrderStatusUseCase {
    private readonly orderStatusRepository;
    constructor(orderStatusRepository: IOrderStatusRepository);
    addOrderStatus(body: OrderStatus[]): Promise<OrderStatus[]>;
    getAllOrderStatus(): Promise<OrderStatus[]>;
    getByKey(key: string): Promise<OrderStatus>;
}
