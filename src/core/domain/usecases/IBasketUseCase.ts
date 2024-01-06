import { Basket } from "../entities/basket";
import { Order } from "../entities/order";

export interface IBasketUseCase {
  createBasket(
    customerId: string,
    basket: Basket,
    paymentNew: string
  ): Promise<Basket>;

  getAllPendingOrders(): Promise<Order[]>;
}
