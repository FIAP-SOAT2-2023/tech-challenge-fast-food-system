import { Item } from "../../core/domain/entities/item";
export declare class ItemRequest implements Item {
    productId: number;
    quantity: number;
    unitPrice: number;
    observations: string;
}
