import { Request, Response } from "express";
import {OrderStatusUseCase} from "../../core/applications/usecases/orderStatusUseCase";


export class OrderStatusController {

  constructor(private readonly orderStatusUseCase: OrderStatusUseCase) { }

  async addOrderStatus(req: Request, res: Response) {
    const orderStatus = req.body
    const results = await this.orderStatusUseCase.addOrderStatus(orderStatus);

    const responseData = results.map(result => ({
      uuid: result.uuid,
      key: result.key,
      name: result.name,
    }))

    res.status(200).json(responseData);
  }

  async getAllOrderStatus(req: Request, res: Response) {
    const result = await this.orderStatusUseCase.getAllOrderStatus();
    res.status(200).json(result);
  }
}
