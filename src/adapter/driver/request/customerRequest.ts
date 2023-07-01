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
  Max,
  MinLength,
  MaxLength,
  IsNotEmpty,
  ValidateIf,
  isValidationOptions,
  max,
} from "class-validator";

import { Customer } from "core/domain/customer";
export class CustomerRequest implements Customer {
  @Length(2, 50, {
    message: "firstName should be between 2 and 50 characters",
  })
  @IsNotEmpty({ message: "firstName is required" })
  declare firstName: string;

  @Length(2, 50, { message: "lastName should be between 2 and 50 characters" })
  @IsNotEmpty({ message: "lastName is required" })
  declare lastName: string;

  @Max(9, { message: "document should 9 characters" })
  @IsNotEmpty({ message: "document is required" })
  @MinLength(8, {
    message: "document is too short",
  })
  declare document: string;

  @IsNotEmpty({ message: "email is required" })
  @IsEmail()
  declare email: string;

  @Max(9, { message: "cellphone should 9 characters" })
  @MinLength(8, {
    message: "cellphone is too short",
  })
  @IsNotEmpty({ message: "cellphone is required" })
  declare cellphone: string;
}
