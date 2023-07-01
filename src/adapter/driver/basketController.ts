import { Request, Response } from "express";
import { Basket } from "../../core/domain/basket";
import { BasketService } from "../../core/applications/services/BasketService";
import { Payment } from "core/domain/payment";

export class BasketController {

    constructor(private readonly basketService: BasketService){}
    
    async create(req: Request, res: Response) {

        let basket: Basket = {
            ...req.body
        };

        let payment: Payment = {
            ...req.body.payment
        }
        
        this.basketService
        .createBasket(req.body.customerId, basket, payment)
        .then((basketCreated: Basket) => {
            res.status(200).json({order: basketCreated.order});
        })
        .catch((error) => {
            console.error(error)
            res.json(JSON.stringify({message: error})).sendStatus(400)
        })
        
    }
}