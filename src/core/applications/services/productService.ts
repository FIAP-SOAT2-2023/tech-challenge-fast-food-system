import { IProductServicePortIn } from 'core/applications/ports/in/iProductServicePortIn';
import { IProductRepository } from 'core/applications/ports/out/productRepository';
import { injectable, inject } from "tsyringe";
import { Product } from "core/domain/product";
import ProductModel from "infra/models/productModel";

@injectable()
export class ProductService implements IProductServicePortIn {
  constructor(private readonly productRepository: IProductRepository) {}
  addProduct(body: Product): Promise<ProductModel> {
    return this.productRepository.addProduct(body);
  }

  getProductById(id: string): Promise<ProductModel> {
    return this.productRepository.getProductById(id);
  }

  getAllProduct(filters: Record<string, any>): Promise<ProductModel[]> {
    return this.productRepository.getAllProduct(filters);
  }

  putProductById(id: string, body: Product): Promise<ProductModel> {
    return this.productRepository.putProductById(id, body);
  }

  deleteProductById(id: string): Promise<void> {
    return this.productRepository.deleteProductById(id);
  }
}
