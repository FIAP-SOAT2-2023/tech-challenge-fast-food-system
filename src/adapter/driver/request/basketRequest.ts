import { Basket } from "core/domain/basket";
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

import { Customer } from "core/domain/customer";
import { Item } from "core/domain/item";

export class BasketRequest implements Basket {

    declare id: string;

    declare isTakeOut: boolean;

    @IsNotEmpty({message: 'customer is required'})
    declare customer: Customer;

    @Length(2, 10, {message: 'Total Price should be between 2 and 10 characters'})
    @IsNotEmpty({message: 'Total Price is required'})
    declare  totalPrice: number;

    @IsNotEmpty({message: 'Item is required'})
    declare items: Item[];

}