import { PaymentUseCase } from "core/applications/usecases/paymentUseCase";
import { Request, Response } from "express";

export class PaymentController {
  constructor(private readonly paymentStatusUseCase: PaymentUseCase) {}

  async getPaymentByOrderId(req: Request, res: Response) {
    const orderId = req.params.orderId;

    const result = await this.paymentStatusUseCase.getPaymentByOrderId(orderId);

    res.status(200).json(result);
  }
}
