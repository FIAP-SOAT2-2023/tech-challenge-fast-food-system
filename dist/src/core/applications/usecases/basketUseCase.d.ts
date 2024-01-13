import { IPaymentExternalGateway } from './../../../framework/gateways/PaymentExternalGateway';
import { IBasketUseCase } from "../../domain/usecases/IBasketUseCase";
import { IBasketRepository } from "../../domain/repositories/basketRepository";
import IPaymentRepository from "../../domain/repositories/paymentRepository";
import { IOrderRepository } from "../../domain/repositories/orderRepository";
import { ICustomerRepository } from "../../domain/repositories/customerRepository";
import IOrderStatusRepository from "../../domain/repositories/statusRepository";
import { Basket } from "../../domain/entities/basket";
import { Payment } from "../../domain/entities/payment";
import { Order } from "../../domain/entities/order";
export declare class BasketUseCase implements IBasketUseCase {
    private readonly basketRepository;
    private readonly paymentRepository;
    private readonly orderRepository;
    private readonly customerRepository;
    private readonly orderStatusRepository;
    private readonly paymentExternalGateway;
    constructor(basketRepository: IBasketRepository, paymentRepository: IPaymentRepository, orderRepository: IOrderRepository, customerRepository: ICustomerRepository, orderStatusRepository: IOrderStatusRepository, paymentExternalGateway: IPaymentExternalGateway);
    createBasket(customerId: string, basketPending: Basket, paymentNew: Payment): Promise<Basket>;
    getAllPendingOrders(): Promise<Order[]>;
}
