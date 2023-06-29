import express, { Request, Response } from "express";
import { Product } from 'core/domain/product';
import { ProductService } from 'core/applications/services/productService';

export class ProductController {
  constructor(private readonly productService: ProductService) {}

  async addProduct(req: Request, res: Response) {
    const product: Product = {
      ...req.body,
    };
    const result = await this.productService.addProduct(product);
    res.status(200).json(result);
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
