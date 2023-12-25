import { Item } from "./item";
import { Order } from "./order";

export interface Basket {
  uuid?: string;
  customerId?: string;
  totalPrice?: number;
  isTakeOut?: boolean;
  createdAt?: Date;
  items: Item[];
  order?: Order;
  paymentId?: string;
  checkoutUrl?: string;
}
