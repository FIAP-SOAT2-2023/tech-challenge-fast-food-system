"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderUseCase = void 0;
class OrderUseCase {
    constructor(orderRepository) {
        this.orderRepository = orderRepository;
    }
    updateOrderById(id, body) {
        return this.orderRepository.updateOrderById(id, body);
    }
}
exports.OrderUseCase = OrderUseCase;
//# sourceMappingURL=orderUseCase.js.map