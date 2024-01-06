import { Products } from "../entities/products";

export interface IProductRepository {
  getProductByCategory(category: string): Promise<Products>;
}
