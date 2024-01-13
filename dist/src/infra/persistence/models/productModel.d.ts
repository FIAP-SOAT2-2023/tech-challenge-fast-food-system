import { Model } from "sequelize";
interface ProductAttributes {
    uuid?: string;
    name: string;
    description: string | null;
    image: string | null;
    unitPrice: number;
    category: string;
}
declare class ProductModel extends Model<ProductAttributes> implements ProductAttributes {
    id: number;
    uuid: string;
    name: string;
    description: string;
    image: string;
    unitPrice: number;
    category: string;
}
export default ProductModel;
