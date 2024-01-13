import { Order } from "../../core/domain/entities/order";
import { OrderStatus } from "../../core/domain/entities/orderStatus";
export declare class OrderRequest implements Order {
    id: string;
    status: OrderStatus;
}
