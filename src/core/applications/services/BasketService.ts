import { injectable } from "tsyringe";
import { Basket } from "../../domain/basket";
import { IBasketServicePortIn } from "../ports/in/IBasketServicePortIn";
import { BasketRepository } from "../../../adapter/driven/infra/BasketRepository";

@injectable()
export class BasketService implements IBasketServicePortIn {

    constructor(private readonly basketRepository: BasketRepository){}

    createBasket(basket: Basket): Promise<Basket> {
        return this.basketRepository.addBasket(basket);
    }
    
}