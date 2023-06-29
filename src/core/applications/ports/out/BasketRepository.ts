import { Basket } from "../../../domain/basket";


export interface IBasketRepository {
    addBasket(body: Basket): Promise<Basket>;
}