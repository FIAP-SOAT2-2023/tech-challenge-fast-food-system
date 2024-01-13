import { IPaymentExternalGateway, PaymentExternalGateway } from './../../../framework/gateways/PaymentExternalGateway';
import {IBasketUseCase} from "../../domain/usecases/IBasketUseCase";
import {IBasketRepository} from "../../domain/repositories/basketRepository";
import IPaymentRepository from "../../domain/repositories/paymentRepository";
import {IOrderRepository} from "../../domain/repositories/orderRepository";
import {ICustomerRepository} from "../../domain/repositories/customerRepository";
import IOrderStatusRepository from "../../domain/repositories/statusRepository";
import {Basket} from "../../domain/entities/basket";
import OrderStatusKey from "../../../framework/enum/orderStatus";
import {Payment} from "../../domain/entities/payment";
import {Order} from "../../domain/entities/order";



export class BasketUseCase implements IBasketUseCase {

    constructor(
        private readonly basketRepository: IBasketRepository,
        private readonly paymentRepository: IPaymentRepository,
        private readonly orderRepository: IOrderRepository,
        private readonly customerRepository: ICustomerRepository,
        private readonly orderStatusRepository: IOrderStatusRepository,
        private readonly paymentExternalGateway: IPaymentExternalGateway
    ) {}

    async createBasket(customerId: string, basketPending: Basket, paymentNew: Payment): Promise<Basket> {
        return new Promise<Basket> (async (resolve) =>
        {
            basketPending.customer = await this.customerRepository.findByUUID(customerId)

            const basketCreated  = await this.basketRepository.createBasket(basketPending)
            const paymentCreated = await this.paymentRepository.createPayment(paymentNew)


            const orderStatus = await this.orderStatusRepository.getByKey(OrderStatusKey.RECEIVED)

            let expectedOrder = new Date();
    
            expectedOrder.setHours(expectedOrder.getHours() * 4)
    
            const orderPending: Order = {
                basket: basketCreated, 
                payment: paymentCreated,
                status: orderStatus,
                expected: expectedOrder
            }
    
            const orderCreated = await this.orderRepository.createOrder(orderPending)

            const checkoutUrl = await this.paymentExternalGateway.create(orderCreated)

            const basketResult: Basket = {
                order: orderCreated,
                ...basketCreated,
                checkoutUrl: checkoutUrl
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