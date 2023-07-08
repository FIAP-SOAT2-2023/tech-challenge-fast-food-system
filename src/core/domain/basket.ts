import {Customer} from "./customer";
import {Item} from "./item";
import {Order} from "./order";
import {Payment} from "./payment";

export interface Basket {
  uuid?: string;
  customer?: Customer;
  totalPrice?: number;
  isTakeOut?: boolean;
  createdAt?: Date;
  items: Item[];
  order?: Order;
  paymentId?: string;
  payment?: Payment;
}