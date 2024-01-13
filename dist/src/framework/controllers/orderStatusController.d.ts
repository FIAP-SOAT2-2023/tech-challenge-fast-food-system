import { Request, Response } from "express";
import { OrderStatusUseCase } from "../../core/applications/usecases/orderStatusUseCase";
export declare class OrderStatusController {
    private readonly orderStatusUseCase;
    constructor(orderStatusUseCase: OrderStatusUseCase);
    addOrderStatus(req: Request, res: Response): Promise<void>;
    getAllOrderStatus(req: Request, res: Response): Promise<void>;
}
