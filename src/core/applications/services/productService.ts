import { IProductServicePortIn } from 'core/applications/ports/in/iProductServicePortIn';
import { IProductRepository } from 'core/applications/ports/out/productRepository';
import { injectable, inject } from "tsyringe";
import { Product } from "core/domain/product";

@injectable()
export class ProductService implements IProductServicePortIn {
  constructor(private readonly productRepository: IProductRepository) {}
  addProduct(body: Product): Promise<Product> {
    return this.productRepository.addProduct(body);
  }

  getProductById(id: string): Promise<Product> {
    return this.productRepository.getProductById(id);
  }

  getAllProduct(filters: Record<string, any>): Promise<Product[]> {
    return this.productRepository.getAllProduct(filters);
  }

  putProductById(id: string, body: Product): Promise<Product> {
    return this.productRepository.putProductById(id, body);
  }

  deleteProductById(id: string): Promise<void> {
    return this.productRepository.deleteProductById(id);
  }
}
