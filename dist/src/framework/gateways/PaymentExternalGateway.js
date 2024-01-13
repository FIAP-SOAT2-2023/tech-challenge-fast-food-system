"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentExternalGateway = void 0;
class PaymentExternalGateway {
    constructor(mercadoPagoProvider) {
        this.mercadoPagoProvider = mercadoPagoProvider;
    }
    async create(order) {
        const { basket } = order;
        const totalValue = (basket === null || basket === void 0 ? void 0 : basket.totalPrice) || 0;
        const paymentId = (basket === null || basket === void 0 ? void 0 : basket.paymentId) || "";
        return await this.mercadoPagoProvider.createPayment(totalValue, paymentId);
    }
}
exports.PaymentExternalGateway = PaymentExternalGateway;
//# sourceMappingURL=PaymentExternalGateway.js.map