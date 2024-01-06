import { Length, Min, Max, MaxLength, IsNotEmpty } from "class-validator";
import { Item } from "core/domain/entities/item";

export class ItemRequest implements Item {
  @Max(20, { message: "name should be between 2 and 100 characters" })
  @Min(10, { message: "name should be between 2 and 100 characters" })
  @IsNotEmpty({ message: "productId is required" })
  declare productId: number;

  @Min(1, { message: "number should be between 1 and 100 characters" })
  @Max(100, { message: "number should be between 1 and 100 characters" })
  @IsNotEmpty({ message: "quantity is required" })
  declare quantity: number;

  @Min(1, { message: "unitPrice should be between 1 and 1000000 characters" })
  @Max(1000000, {
    message: "unitPrice should be between 1 and 1000000 characters",
  })
  declare unitPrice: number;

  @MaxLength(100, { message: "observations should max 100 characters" })
  declare observations: string;
}
