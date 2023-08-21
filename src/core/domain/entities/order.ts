import { Basket } from "./basket";
import { Payment } from "./payment";

export interface Order {
    uuid?: string,
    code?: string,
    basket?: Basket,
    payment?: Payment,
    status: string,
    doneAt?: Date,
    expected?: Date,
    createdAt?: Date
}