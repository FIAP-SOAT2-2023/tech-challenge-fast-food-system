"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BasketUseCase = void 0;
const orderStatus_1 = __importDefault(require("../../../framework/enum/orderStatus"));
class BasketUseCase {
    constructor(basketRepository, paymentRepository, orderRepository, customerRepository, orderStatusRepository, paymentExternalGateway) {
        this.basketRepository = basketRepository;
        this.paymentRepository = paymentRepository;
        this.orderRepository = orderRepository;
        this.customerRepository = customerRepository;
        this.orderStatusRepository = orderStatusRepository;
        this.paymentExternalGateway = paymentExternalGateway;
    }
    async createBasket(customerId, basketPending, paymentNew) {
        return new Promise(async (resolve) => {
            basketPending.customer = await this.customerRepository.findByUUID(customerId);
            const basketCreated = await this.basketRepository.createBasket(basketPending);
            const paymentCreated = await this.paymentRepository.createPayment(paymentNew);
            const orderStatus = await this.orderStatusRepository.getByKey(orderStatus_1.default.RECEIVED);
            let expectedOrder = new Date();
            expectedOrder.setHours(expectedOrder.getHours() * 4);
            const orderPending = {
                basket: basketCreated,
                payment: paymentCreated,
                status: orderStatus,
                expected: expectedOrder
            };
            const orderCreated = await this.orderRepository.createOrder(orderPending);
            const checkoutUrl = await this.paymentExternalGateway.create(orderCreated);
            const basketResult = Object.assign(Object.assign({ order: orderCreated }, basketCreated), { checkoutUrl: checkoutUrl });
            resolve(basketResult);
        });
    }
    async getAllPendingOrders() {
        return new Promise(async (resolve) => {
            const orderList = await this.orderRepository.getAllPendingOrders();
            resolve(orderList);
        });
    }
}
exports.BasketUseCase = BasketUseCase;
//# sourceMappingURL=basketUseCase.js.map