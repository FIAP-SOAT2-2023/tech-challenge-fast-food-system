import { Basket } from "./basket";
import { Payment } from "./payment";

export interface Order {
    uuid?: string,
    basket: Basket,
    payment: Payment,
    status: string,
    doneAt?: Date,
    expected?: Date,
    createdAt?: Date
}