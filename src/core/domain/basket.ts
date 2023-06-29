import { Customer } from "./customer";
import { Item } from "./item";

export interface Basket {
    customer?: Customer;
    totalPrice?: number;
    isTakeOut?: boolean;
    createdAt?: Date;
    items?: Item[];
    uuid?: string
}