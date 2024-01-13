import { Request, Response } from "express";
import { OrderUseCase } from "../../core/applications/usecases/orderUseCase";
export declare class OrderController {
    private readonly orderUseCase;
    constructor(orderUseCase: OrderUseCase);
    updateOrderById(req: Request, res: Response): Promise<void>;
}
