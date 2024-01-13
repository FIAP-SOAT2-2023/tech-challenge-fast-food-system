import { Request, Response } from "express";
import { BasketUseCase } from "../../core/applications/usecases/basketUseCase";
export declare class BasketController {
    private readonly basketUseCase;
    constructor(basketUseCase: BasketUseCase);
    create(req: Request, res: Response): Promise<void>;
    getAllPendingOrders(req: Request, res: Response): Promise<void>;
}
