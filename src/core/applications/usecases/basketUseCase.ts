import { Basket } from "core/domain/entities/basket";
import { Order } from "core/domain/entities/order";
import { Payment } from "core/domain/entities/payment";
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
    basketPending: Basket,
    paymentNew: string
  ): Promise<Basket> {
    let paymentCreated: Payment;
    return new Promise<Basket>(async (resolve) => {
      // aqui vou ter que se comunicar com o microserviço Customer para obter o id
      basketPending.customerId = "1";

      const basketCreated = await this.basketRepository.createBasket(
        basketPending
      );

      // pagamento vai ser enviado para microserviço Pagamento
      /*
      const paymentCreated = await this.paymentRepository.createPayment(
        paymentNew
      );
*/

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

      // Verificar com o microserviço de pagamento se foi realizado o pagamento
      const checkoutUrl = "1";

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
