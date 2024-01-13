import {IProductUseCase} from "../../domain/usecases/IProductUseCase";
import {IProductRepository} from "../../domain/repositories/productRepository";
import {Product} from "../../domain/entities/product";

export class ProductUseCase implements IProductUseCase {
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
