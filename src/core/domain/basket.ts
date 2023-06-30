import { Customer } from "./customer";
import { Item } from "./item";

export interface Basket {
    uuid?: string;
    customerId: string;
    totalPrice?: number;
    isTakeOut?: boolean;
    createdAt?: Date;
    items?: Item[];
   
}