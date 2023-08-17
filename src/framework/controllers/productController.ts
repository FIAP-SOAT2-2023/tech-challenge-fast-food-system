import { ProductUseCase } from "core/applications/usecases/productUseCase";
import { Request, Response } from "express";
import { ProductRequest } from "framework/request/productRequest";
import { ValidationUtil } from "framework/validation/validateRequest";

export class ProductController {

  constructor(private readonly productUseCase: ProductUseCase) { }

  async addProduct(req: Request, res: Response) {
    const product = await ValidationUtil.validateAndTransform(ProductRequest, req.body, res);
    const result = await this.productUseCase.addProduct(product);

    const data = {
      uuid: result.uuid,
      name: result.name,
      image: result.image,
      unitPrice: result.unitPrice,
      description: result.description,
    }
    res.status(200).json(data);
  }

  async getProductById(req: Request, res: Response) {
    const id = req.params.id
    const result = await this.productUseCase.getProductById(id);
    res.status(200).json(result);
  }

  async getAllProduct(req: Request, res: Response) {
    const filters: Record<string, any> = req.query;
    const result = await this.productUseCase.getAllProduct(filters);
    res.status(200).json(result);
  }

  async putProductById(req: Request, res: Response) {
    const id = req.params.id
    const product = await ValidationUtil.validateAndTransform(ProductRequest, req.body, res);
    const result = await this.productUseCase.putProductById(id, product);
    res.status(200).json(result);
  }

  async deleteProductById(req: Request, res: Response) {
    const id = req.params.id
    await this.productUseCase.deleteProductById(id);
    res.sendStatus(204);
  }
}
