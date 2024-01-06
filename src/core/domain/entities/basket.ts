import { Item } from "./item";
import { Order } from "./order";

export interface Basket {
  uuid?: string;
  customer?: string;
  totalPrice?: number;
  isTakeOut?: boolean;
  createdAt?: Date;
  items: Item[];
  order?: Order;
  paymentId?: string;
  payment?: string;
  checkoutUrl?: string;
}
