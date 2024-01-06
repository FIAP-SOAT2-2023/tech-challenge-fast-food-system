import { Basket } from "core/domain/entities/basket";
import { Order } from "core/domain/entities/order";
import { IBasketRepository } from "core/domain/repositories/basketRepository";
import { IOrderRepository } from "core/domain/repositories/orderRepository";
import IOrderStatusRepository from "core/domain/repositories/statusRepository";
import { IBasketUseCase } from "core/domain/usecases/IBasketUseCase";
import OrderStatusKey from "framework/enum/orderStatus";

export class BasketUseCase implements IBasketUseCase {
  constructor(
    private readonly basketRepository: IBasketRepository,
    private readonly orderRepository: IOrderRepository,
    private readonly orderStatusRepository: IOrderStatusRepository
  ) {}

  async createBasket(
    customerId: string,
    basketPending: Basket,
    paymentNew: string
  ): Promise<Basket> {
    return new Promise<Basket>(async (resolve) => {
      basketPending.customer = "microservico de customer, retornar o id";

      const basketCreated = await this.basketRepository.createBasket(
        basketPending
      );
      const paymentCreated = "microserviço de pagamento";

      const orderStatus = await this.orderStatusRepository.getByKey(
        OrderStatusKey.RECEIVED
      );

      let expectedOrder = new Date();

      expectedOrder.setHours(expectedOrder.getHours() * 4);

      const orderPending: Order = {
        basket: basketCreated,
        payment: paymentCreated,
        status: orderStatus,
        expected: expectedOrder,
      };

      const orderCreated = await this.orderRepository.createOrder(orderPending);

      /*
      const checkoutUrl = await this.paymentExternalGateway.create(
        orderCreated
      );
*/
      const checkoutUrl =
        "url do mercado livre para direcionar para o pagamento";

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
