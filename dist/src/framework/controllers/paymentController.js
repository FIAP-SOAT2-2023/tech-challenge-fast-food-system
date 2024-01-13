"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentController = void 0;
class PaymentController {
    constructor(paymentStatusUseCase) {
        this.paymentStatusUseCase = paymentStatusUseCase;
    }
    async updatePaymentStatusByNsu(req, res) {
        const body = req.body;
        const result = await this.paymentStatusUseCase.updatePaymentStatusByNsu(body);
        res.status(200).json(result);
    }
    async getPaymentByOrderId(req, res) {
        const orderId = req.params.orderId;
        const result = await this.paymentStatusUseCase.getPaymentByOrderId(orderId);
        res.status(200).json(result);
    }
}
exports.PaymentController = PaymentController;
//# sourceMappingURL=paymentController.js.map