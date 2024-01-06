import { Basket } from "../entities/basket";
import { Order } from "../entities/order";

export interface IBasketUseCase {
  createBasket(
    document: string,
    basket: Basket,
    paymentNew: any,
    category: string
  ): Promise<Basket>;

  getAllPendingOrders(): Promise<Order[]>;
}
