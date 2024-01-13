import { Basket } from "../../../core/domain/entities/basket";
import { IBasketRepository } from "../../../core/domain/repositories/basketRepository";
export declare class BasketRepository implements IBasketRepository {
    createBasket(basketNew: Basket): Promise<Basket>;
}
