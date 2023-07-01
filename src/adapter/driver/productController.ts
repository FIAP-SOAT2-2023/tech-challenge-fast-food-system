import express, { Request, Response } from "express";
import { Product } from 'core/domain/product';
import { ProductService } from 'core/applications/services/productService';
import { validate, ValidationError } from 'class-validator';
import { plainToClass, plainToInstance } from 'class-transformer';
import { ProductRequest } from "./request/productRequest";
export class ProductController {
  constructor(private readonly productService: ProductService) { }

  async addProduct(req: Request, res: Response) {

    const product = plainToInstance(ProductRequest, req.body);

    const errors: ValidationError[] = await validate(product)

    if (errors.length > 0) {
      
      const errorMessages: string[] = errors.map((error) => Object.values(error.constraints || "")).join(",").split(",")
      res.status(400).json({ error: errorMessages });
      
      return;

    } else {

      const productPending: ProductRequest = {
        ...req.body,
      };

      const result = await this.productService.addProduct(productPending);

      res.status(200).json(result);

    }

    

    
  }

  async getProductById(req: Request, res: Response) {
    const id = req.params.id
    const result = await this.productService.getProductById(id);
    res.status(200).json(result);
  }

  async getAllProduct(req: Request, res: Response) {
    const filters: Record<string, any> = req.query;
    const result = await this.productService.getAllProduct(filters);
    res.status(200).json(result);
  }

  async putProductById(req: Request, res: Response) {
    const id = req.params.id
    const product: Product = {
      ...req.body,
    };
    const result = await this.productService.putProductById(id, product);
    res.status(200).json(result);
  }

  async deleteProductById(req: Request, res: Response) {
    const id = req.params.id
    await this.productService.deleteProductById(id);
    res.sendStatus(204);
  }
}
