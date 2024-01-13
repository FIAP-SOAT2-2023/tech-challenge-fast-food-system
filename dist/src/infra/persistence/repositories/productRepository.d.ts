import { IProductRepository } from "../../../core/domain/repositories/productRepository";
import { Product } from "../../../core/domain/entities/product";
export declare class ProductRepository implements IProductRepository {
    addProduct(body: Product): Promise<Product>;
    getProductById(id: string): Promise<Product>;
    getAllProduct(filters: Record<string, any>): Promise<Product[]>;
    putProductById(id: string, body: Product): Promise<Product>;
    deleteProductById(id: string): Promise<void>;
}
