import { Basket } from "../entities/basket";

export interface IBasketRepository {
  createBasket(basketNew: Basket): Promise<Basket>;
}