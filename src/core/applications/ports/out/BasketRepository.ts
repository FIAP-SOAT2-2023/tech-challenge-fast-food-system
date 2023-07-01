import { Basket } from "../../../domain/basket";


export interface IBasketRepository {
    createBasket(basketNew: Basket): Promise<Basket>;
}