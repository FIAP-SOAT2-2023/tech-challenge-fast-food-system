import { Product } from "../../core/domain/entities/product";
export declare class ProductRequest implements Product {
    id: string;
    name: string;
    description: string;
    image: string;
    unitPrice: number;
    category: string;
}
