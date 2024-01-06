import { Customer } from "./customer";
import { Item } from "./item";
import { Order } from "./order";
import { Products } from "./products";

export interface Basket {
  uuid?: string;
  customer?: Customer;
  totalPrice?: number;
  isTakeOut?: boolean;
  createdAt?: Date;
  items: Item[];
  order?: Order;
  paymentId?: string;
  payment?: any;
  checkoutUrl?: string;
  product?: Products;
}
