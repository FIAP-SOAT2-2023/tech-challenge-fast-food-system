"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentUseCase = void 0;
class PaymentUseCase {
    constructor(paymentRepository) {
        this.paymentRepository = paymentRepository;
    }
    getPaymentByOrderId(orderId) {
        return this.paymentRepository.getPaymentByOrderId(orderId);
    }
    updatePaymentStatusByNsu(body) {
        return this.paymentRepository.updatePaymentStatusByNsu(body);
    }
}
exports.PaymentUseCase = PaymentUseCase;
//# sourceMappingURL=paymentUseCase.js.map