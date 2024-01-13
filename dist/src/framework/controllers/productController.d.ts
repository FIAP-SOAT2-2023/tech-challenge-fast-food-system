import { Request, Response } from "express";
import { ProductUseCase } from "../../core/applications/usecases/productUseCase";
export declare class ProductController {
    private readonly productUseCase;
    constructor(productUseCase: ProductUseCase);
    addProduct(req: Request, res: Response): Promise<void>;
    getProductById(req: Request, res: Response): Promise<void>;
    getAllProduct(req: Request, res: Response): Promise<void>;
    putProductById(req: Request, res: Response): Promise<void>;
    deleteProductById(req: Request, res: Response): Promise<void>;
}
