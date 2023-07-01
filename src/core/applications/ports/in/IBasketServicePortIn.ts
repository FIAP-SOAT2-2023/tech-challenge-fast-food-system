import { Payment } from "core/domain/payment";
import { Basket } from "../../../domain/basket";

export interface IBasketServicePortIn {
    createBasket(customerId: string, basket: Basket, paymentNew: Payment): Promise<Basket>;
  }
  