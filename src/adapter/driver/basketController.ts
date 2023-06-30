import { Request, Response } from "express";
import { Basket } from "../../core/domain/basket";
import { BasketService } from "../../core/applications/services/BasketService";

export class BasketController {

    constructor(private readonly basketService: BasketService){}
    
    async create(req: Request, res: Response) {

        let basket: Basket = {
            ...req.body
        };
        
        this.basketService
        .createBasket(basket)
        .then((basketCreated) => res.status(200).json(basketCreated))
        .catch((error) => {
            console.error(`Error: `, error)
            res.sendStatus(500)
        })
        
    }
}