import { Payment } from "core/domain/entities/payment";
import { Basket } from "core/domain/entities/basket";
import { Order } from "core/domain/entities/order";
import { IBasketRepository } from "core/domain/repositories/basketRepository";
import { ICustomerRepository } from "core/domain/repositories/customerRepository";
import { IOrderRepository } from "core/domain/repositories/orderRepository";
import { IPaymentRepository } from "core/domain/repositories/paymentRepository";
import { IProductRepository } from "core/domain/repositories/productRepository";
import IOrderStatusRepository from "core/domain/repositories/statusRepository";
import { IBasketUseCase } from "core/domain/usecases/IBasketUseCase";
import OrderStatusKey from "framework/enum/orderStatus";
import { v4 as uuidv4 } from "uuid";
import { Item } from "core/domain/entities/item";
import { Products } from "core/domain/entities/products";

export class BasketUseCase implements IBasketUseCase {
  constructor(
    private readonly basketRepository: IBasketRepository,
    private readonly orderRepository: IOrderRepository,
    private readonly orderStatusRepository: IOrderStatusRepository,
    private readonly customerRepository: ICustomerRepository,
    private readonly productRepository: IProductRepository,
    private readonly paymentRepository: IPaymentRepository
  ) {}

  async createBasket(
    document: string,
    basketPending: Basket,
    paymentNew: Payment
  ): Promise<Basket> {
    return new Promise<Basket>(async (resolve) => {
      basketPending.customer =
        await this.customerRepository.getCustomerIdByDocument(document);
      for (const item of basketPending.items) {
        if (item.category !== undefined) {
          let result: any = await this.productRepository.getProductByCategory(
            item.category
          );

          if (result !== null) {
            result.map((response: Products) => {
              basketPending.items?.push({
                unitPrice: response.unitPrice,
                productId: response.productId,
                quantity: item.quantity,
              } as Item);
            });
          }
        }
      }
      const basketCreated = await this.basketRepository.createBasket(
        basketPending
      );
      const orderStatus = await this.orderStatusRepository.getByKey(
        OrderStatusKey.RECEIVED
      );

      let expectedOrder = new Date();

      expectedOrder.setHours(expectedOrder.getHours() * 4);
      let paymentId: any = await this.paymentRepository.createPayment(
        paymentNew
      );
      paymentNew = { ...paymentNew, uuid: uuidv4() };
      const orderPending: Order = {
        basket: basketCreated,
        payment: paymentId.paymentId,
        status: orderStatus,
        expected: expectedOrder,
      };

      const orderCreated = await this.orderRepository.createOrder(orderPending);
      basketPending.payment = await this.paymentRepository.createPayment(
        paymentNew
      );
      /* Debito técnico: microserviço de Pagamento tem que nos passar a url do mercado livre de pagamento */
      const checkoutUrl =
        "https://www.mercadopago.com.br/checkout/v1/redirect?pref_id=136971995-d28f6df8-8d6d-4310-be5b-0935d83c4419";

      const basketResult: Basket = {
        order: orderCreated,
        ...basketCreated,
        checkoutUrl: checkoutUrl,
      };

      resolve(basketResult);
    });
  }

  async getAllPendingOrders(): Promise<Order[]> {
    return new Promise<Order[]>(async (resolve) => {
      const orderList = await this.orderRepository.getAllPendingOrders();
      resolve(orderList);
    });
  }
}
