import { Product } from "core/domain/product";
import { Length, IsNotEmpty, IsNumber } from 'class-validator';

export class ProductRequest implements Product {
    declare id: string;

    @Length(2, 50, {message: 'Name should be between 2 and 50 characters'})
    @IsNotEmpty({message: 'Name is required'})
    declare name: string;

    @Length(2, 100, {message: 'Description should be between 2 and 100 characters'})
    @IsNotEmpty({message: 'Description is required'})
    declare description: string;

    @IsNotEmpty({message: 'Image is required'})
    declare image: string;

    @IsNumber()
    @IsNotEmpty({message: 'Unit price is required'})
    declare unitPrice: number;

    @Length(6, 20, {message: 'Category should be Lanche, Acompanhamento, Bebida, Sobremesa'})
    @IsNotEmpty({message: 'Category is required'})
    declare category: string;
}
