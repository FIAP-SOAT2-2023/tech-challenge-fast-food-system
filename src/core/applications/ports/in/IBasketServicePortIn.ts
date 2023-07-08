import {Payment} from "core/domain/payment";
import {Basket} from "core/domain/basket";
import {Order} from "core/domain/order";

export interface IBasketServicePortIn {
  createBasket(customerId: string, basket: Basket, paymentNew: Payment): Promise<Basket>;

  getAllPendingOrders(): Promise<Order[]>;
}
  