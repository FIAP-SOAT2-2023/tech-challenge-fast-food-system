import { Basket } from "core/domain/entities/basket";
import { Order } from "core/domain/entities/order";
import { Payment } from "core/domain/entities/payment";
import { IBasketRepository } from "core/domain/repositories/basketRepository";
import { ICustomerRepository } from "core/domain/repositories/customerRepository";
import { IOrderRepository } from "core/domain/repositories/orderRepository";
import IPaymentRepository from "core/domain/repositories/paymentRepository";
import IStatusRepository from "core/domain/repositories/statusRepository";
import { IBasketUseCase } from "core/domain/usecases/IBasketUseCase";
import OrderStatusKey from "framework/enum/orderStatus";


export class BasketUseCase implements IBasketUseCase {

    constructor(
        private readonly basketRepository: IBasketRepository,
        private readonly paymentRepository: IPaymentRepository,
        private readonly orderRepository: IOrderRepository,
        private readonly customerRepository: ICustomerRepository,
        private readonly statusRepository: IStatusRepository
    ) {}

    async createBasket(customerId: string, basketPending: Basket, paymentNew: Payment): Promise<Basket> {
        return new Promise<Basket> (async (resolve) =>
        {
            basketPending.customer = await this.customerRepository.findByUUID(customerId)

            const basketCreated  = await this.basketRepository.createBasket(basketPending)
            const paymentCreated = await this.paymentRepository.createPayment(paymentNew)


            const status = await this.statusRepository.getByKey(OrderStatusKey.RECEIVED)

            let expectedOrder = new Date();
    
            expectedOrder.setHours(expectedOrder.getHours() * 4)
    
            const orderPending: Order = {
                basket: basketCreated, 
                payment: paymentCreated,
                status: status,
                expected: expectedOrder
            }
    
            const orderCreated = await this.orderRepository.createOrder(orderPending)

            const basketResult: Basket = {
                order: orderCreated,
                ...basketCreated,
            }

            resolve(basketResult);
        })
    }

    async getAllPendingOrders(): Promise<Order[]> {
        return new Promise<Order[]> (async (resolve) => {
            const orderList = await this.orderRepository.getAllPendingOrders()
            resolve(orderList)
        });
    }
}