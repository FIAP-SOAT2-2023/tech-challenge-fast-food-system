import { Item } from "core/domain/item";

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

export class ItemRequest implements Item {

  @Length(10, 20, {message: 'name should be between 2 and 100 characters'})
  @IsNotEmpty({message: 'productId is required'})
  declare productId: string;


  @Min(1, {message: "number should be between 1 and 100 characters"})
  @Max(100, {message: "number should be between 1 and 100 characters"})
  @IsNotEmpty({message: 'quantity is required'})
  declare quantity: number;

  @Min(1, {message: "unitPrice should be between 1 and 1000000 characters"})
  @Max(1000000, {message: "unitPrice should be between 1 and 1000000 characters"})
  declare unitPrice: number;

  @MaxLength(100, {message: "observations should max 100 characters"})
  declare observations: string;
}