import ProductModel from "../../../../infra/models/productModel";
import { Product } from "../../../domain/product";

export interface IProductRepository {
  addProduct(body: Product): Promise<ProductModel>;
  getProductById(id: string): Promise<ProductModel>;
  getAllProduct(filters: Record<string, any>): Promise<ProductModel[]>;
  putProductById(id: string, body: Product): Promise<ProductModel>;
  deleteProductById(id: string): Promise<void>;
}
