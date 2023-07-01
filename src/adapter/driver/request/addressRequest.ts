import { Address } from "core/domain/address";
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
export class AddressRequest implements Address {
  declare id: string;
  declare customerId: string;
  @Length(2, 50, {
    message: "streetName should be between 2 and 50 characters",
  })
  @IsNotEmpty({ message: "streetName is required" })
  declare streetName: string;

  @IsNotEmpty({ message: "number is required" })
  declare number: string;
  @Length(2, 50, {
    message: "neighborhood should be between 2 and 50 characters",
  })
  @IsNotEmpty({ message: "neighborhood is required" })
  declare neighborhood: string;

  declare complement: string;

  @Max(9, { message: "zipCode should 9 characters" })
  @IsNotEmpty({ message: "zipCode is required" })
  declare zipCode: string;

  @IsNotEmpty({ message: "state is required" })
  declare state: string;
  @IsNotEmpty({ message: "city is required" })
  declare city: string;
  @IsNotEmpty({ message: "country is required" })
  declare country: string;
}
