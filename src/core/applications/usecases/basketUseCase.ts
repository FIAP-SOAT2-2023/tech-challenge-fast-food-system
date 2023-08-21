import { Basket } from "core/domain/entities/basket";
import { Order } from "core/domain/entities/order";
import { Payment } from "core/domain/entities/payment";
import { IBasketRepository } from "core/domain/repositories/basketRepository";
import { ICustomerRepository } from "core/domain/repositories/customerRepository";
import { IOrderRepository } from "core/domain/repositories/orderRepository";
import IPaymentRepository from "core/domain/repositories/paymentRepository";
import { IBasketUseCase } from "core/domain/usecases/IBasketUseCase";


export class BasketUseCase implements IBasketUseCase {

    constructor(
        private readonly basketRepository: IBasketRepository,
        private readonly paymentRepository: IPaymentRepository,
        private readonly orderRepository: IOrderRepository,
        private readonly customerRepository: ICustomerRepository
    ) {}

    async createBasket(customerId: string, basketPending: Basket, paymentNew: Payment): Promise<Basket> {
        return new Promise<Basket> (async (resolve) =>
        {
            basketPending.customer = await this.customerRepository.findByUUID(customerId)

            const basketCreated  = await this.basketRepository.createBasket(basketPending)
            const paymentCreated = await this.paymentRepository.createPayment(paymentNew)

            let expectedOrder = new Date();
    
            expectedOrder.setHours(expectedOrder.getHours() * 4)
    
            const orderPending: Order = {
                basket: basketCreated, 
                payment: paymentCreated,
                status: "PENDING",
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