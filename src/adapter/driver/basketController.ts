import {Request, Response} from "express";
import {BasketService} from "core/applications/services/basketService";
import {BasketRequest} from "./request/basketRequest";
import {Basket} from "core/domain/basket";
import {Order} from "sequelize";

export class BasketController {

  constructor(
    private readonly basketService: BasketService
  ) {
  }

  async create(req: Request, res: Response) {
    let basket: BasketRequest = {
      ...req.body
    };

    this.basketService
      .createBasket(req.body.customerId, basket, basket.payment ?? {})
      .then((basketCreated: Basket) => {
        res.status(200).json({order: basketCreated.order});
      })
      .catch((error) => {
        console.error(error)
        res.json(JSON.stringify({message: error})).sendStatus(400)
      })
  }

  async getAllPendingOrders(req: Request, res: Response) {
    this.basketService
        .getAllPendingOrders()
        .then((orders) => {
          res.status(200).json({orders: orders});
        })
        .catch((error) => {
          console.error(error)
          res.json(JSON.stringify({message: error})).sendStatus(400)
        })
  }
}