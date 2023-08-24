import { Basket } from "./basket";
import { Payment } from "./payment";
import { OrderStatus } from "./orderStatus";

export interface Order {
    uuid?: string,
    code?: string,
    basket?: Basket,
    payment?: Payment,
    status: OrderStatus,
    doneAt?: Date,
    expected?: Date,
    createdAt?: Date,
    updatedAt?: Date,
}