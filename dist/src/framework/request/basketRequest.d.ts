import { ItemRequest } from "./ItemRequest";
import { PaymentRequest } from "./paymentRequest";
import { Basket } from "../../core/domain/entities/basket";
import { Order } from "../../core/domain/entities/order";
export declare class BasketRequest implements Basket {
    id: number;
    uuid?: string;
    customerId?: string;
    totalPrice?: number;
    isTakeOut?: boolean;
    createdAt?: Date;
    items: ItemRequest[];
    order?: Order;
    paymentId?: string;
    payment?: PaymentRequest;
}
