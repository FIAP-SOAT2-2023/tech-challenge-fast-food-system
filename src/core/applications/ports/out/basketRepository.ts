import {Basket} from "core/domain/basket";

export interface IBasketRepository {
  createBasket(basketNew: Basket): Promise<Basket>;
}