import { Basket } from "../entities/basket";
import { Order } from "../entities/order";
import { Payment } from "../entities/payment";

export interface IBasketUseCase {
  createBasket(basket: Basket, paymentNew: string): Promise<Basket>;

  getAllPendingOrders(): Promise<Order[]>;
}
