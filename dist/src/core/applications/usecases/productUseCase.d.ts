import { IProductUseCase } from "../../domain/usecases/IProductUseCase";
import { IProductRepository } from "../../domain/repositories/productRepository";
import { Product } from "../../domain/entities/product";
export declare class ProductUseCase implements IProductUseCase {
    private readonly productRepository;
    constructor(productRepository: IProductRepository);
    addProduct(body: Product): Promise<Product>;
    getProductById(id: string): Promise<Product>;
    getAllProduct(filters: Record<string, any>): Promise<Product[]>;
    putProductById(id: string, body: Product): Promise<Product>;
    deleteProductById(id: string): Promise<void>;
}
