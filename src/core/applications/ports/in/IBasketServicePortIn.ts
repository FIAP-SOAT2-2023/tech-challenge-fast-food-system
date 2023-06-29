import { Basket } from "../../../domain/basket";

export interface IBasketServicePortIn {
    createBasket(basket: Basket): Promise<Basket>;
  }
  