import { Basket } from "./basket";
import { Payment } from "./payment";
import { Status } from "./status";

export interface Order {
    uuid?: string,
    basket?: Basket,
    payment?: Payment,
    status: Status,
    doneAt?: Date,
    expected?: Date,
    createdAt?: Date
}