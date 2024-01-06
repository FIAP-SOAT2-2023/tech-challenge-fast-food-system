import { Basket } from "./basket";
import { OrderStatus } from "./orderStatus";

export interface Order {
  uuid?: string;
  code?: string;
  basket?: Basket;
  payment?: any;
  status: OrderStatus;
  doneAt?: Date;
  expected?: Date;
  createdAt?: Date;
  updatedAt?: Date;
}
