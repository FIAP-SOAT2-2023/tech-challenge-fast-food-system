import { OrderUseCase } from "core/applications/usecases/orderUseCase";
import { Request, Response } from "express";
import { OrderRequest } from "framework/request/orderRequest";
import { ValidationUtil } from "framework/validation/validateRequest";

export class OrderController {

  constructor(private readonly orderUseCase: OrderUseCase) { }

  async updateOrderById(req: Request, res: Response) {
    const id = req.params.id
    const order = await ValidationUtil.validateAndTransform(OrderRequest, req.body, res);
    const result = await this.orderUseCase.updateOrderById(id, order);
    res.status(200).json(result);
  }
}
