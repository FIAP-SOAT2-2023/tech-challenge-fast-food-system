import { Request, Response } from "express";
import { OrderUseCase } from "core/applications/usecases/orderUseCase";

export class OrderController {
  constructor(private readonly orderUseCase: OrderUseCase) {}

  async getAllOrder(req: Request, res: Response) {
    this.orderUseCase
      .getAllOrder()
      .then((orders) => {
        res.status(200).json({ orders: orders });
      })
      .catch((error) => {
        console.error(error);
        res.json(JSON.stringify({ message: error })).sendStatus(400);
      });
  }
}
