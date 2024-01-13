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
import {Customer} from "../../core/domain/entities/customer";

export class CustomerRequest implements Customer {
  @Length(2, 50, {
    message: "firstName should be between 2 and 50 characters",
  })
  @IsNotEmpty({ message: "firstName is required" })
  declare firstName: string;

  @Length(2, 50, { message: "lastName should be between 2 and 50 characters" })
  @IsNotEmpty({ message: "lastName is required" })
  declare lastName: string;

  @Length(11, 11, { message: "document should 11 characters" })
  @IsNotEmpty({ message: "document is required" })
  declare document: string;

  @IsNotEmpty({ message: "email is required" })
  @IsEmail()
  declare email: string;

  @Length(11, 11, { message: "cellphone should 11 characters" })
  @IsNotEmpty({ message: "cellphone is required" })
  declare cellphone: string;
}
