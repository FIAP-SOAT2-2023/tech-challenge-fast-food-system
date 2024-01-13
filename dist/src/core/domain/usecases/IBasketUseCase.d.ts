import { Basket } from "../entities/basket";
import { Order } from "../entities/order";
import { Payment } from "../entities/payment";
export interface IBasketUseCase {
    createBasket(customerId: string, basket: Basket, paymentNew: Payment): Promise<Basket>;
    getAllPendingOrders(): Promise<Order[]>;
}
