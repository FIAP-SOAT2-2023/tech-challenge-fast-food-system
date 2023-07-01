import { injectable } from "tsyringe";
import { Basket } from "../../domain/basket";
import { IBasketServicePortIn } from "../ports/in/IBasketServicePortIn";
import { IBasketRepository } from "../ports/out/BasketRepository";
import IPaymentRepository from "../ports/out/paymentRepository";
import { IOrderRepository } from "../ports/out/orderRepository";
import { Order } from "core/domain/order";
import { resolve } from "path";
import { rejects } from "assert";
import { ICustomerRepository } from "../ports/out/customerRepository";
import { Payment } from "core/domain/payment";

@injectable()
export class BasketService implements IBasketServicePortIn {

    constructor(private readonly basketRepository: IBasketRepository, 
        private readonly  paymentRepository:IPaymentRepository,
        private readonly orderRepository: IOrderRepository,
        private readonly customerRepository: ICustomerRepository
        )
        {}

    async createBasket(customerId: string, basketPending: Basket, paymentNew: Payment): Promise<Basket> {


        return new Promise<Basket> (async (resolve) => {

            basketPending.customer = await this.customerRepository.findByUUID(customerId)
        
            const basketCreated = await this.basketRepository.createBasket(basketPending)
    
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
                ...basketCreated,
                order: orderCreated
            }

            resolve(basketResult);
        })

    }
    
}