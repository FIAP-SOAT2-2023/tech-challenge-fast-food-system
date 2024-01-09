import { Customer } from "./customer";
import { Item } from "./item";
import { Order } from "./order";
import { Products } from "./products";

export interface Basket {
  uuid?: string;
  customer?: any;
  totalPrice?: number;
  isTakeOut?: boolean;
  createdAt?: Date;
  items: Item[];
  order?: Order;
  payment?: any;
  checkoutUrl?: string;
  product?: Products[];
}
