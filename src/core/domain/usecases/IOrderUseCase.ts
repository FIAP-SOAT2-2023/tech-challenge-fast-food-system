import { Order } from "../entities/order";

export interface IOrderUseCase {
    getAllOrder(): Promise<Order[]>;
}
  