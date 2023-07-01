import { Product } from "core/domain/product";
import {
    validate,
    validateOrReject,
    Contains,
    IsInt,
    Length,
    IsEmail,
    IsFQDN,
    IsDate,
    Min,
    Max, MinLength, MaxLength,
    IsNotEmpty ,ValidateIf
  } from 'class-validator';

export class ProductRequest implements Product {
    

    declare id: string;

    @Length(10, 20, {message: 'Name should be between 2 and 50 characters'})
    @IsNotEmpty({message: 'Name is required'})
    declare name: string;

    declare description: string;

    declare image: string;

    declare unitPrice: number;
    
    declare category: string;

}