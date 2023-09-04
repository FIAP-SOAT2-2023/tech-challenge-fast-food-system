import { Product } from "../entities/product";


export interface IProductUseCase {
  addProduct(body: Product): Promise<Product>;
  getProductById(id: string): Promise<Product>;
  getAllProduct(filters: Record<string, any>): Promise<Product[]>;
  putProductById(id: string, body: Product): Promise<Product>;
  deleteProductById(id: string): Promise<void>;
}
