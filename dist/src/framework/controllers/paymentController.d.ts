import { Request, Response } from "express";
import { PaymentUseCase } from "../../core/applications/usecases/paymentUseCase";
export declare class PaymentController {
    private readonly paymentStatusUseCase;
    constructor(paymentStatusUseCase: PaymentUseCase);
    updatePaymentStatusByNsu(req: Request, res: Response): Promise<void>;
    getPaymentByOrderId(req: Request, res: Response): Promise<void>;
}
