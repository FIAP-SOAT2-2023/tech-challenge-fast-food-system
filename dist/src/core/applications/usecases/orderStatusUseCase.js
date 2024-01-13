"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderStatusUseCase = void 0;
class OrderStatusUseCase {
    constructor(orderStatusRepository) {
        this.orderStatusRepository = orderStatusRepository;
    }
    addOrderStatus(body) {
        return this.orderStatusRepository.addOrderStatus(body);
    }
    getAllOrderStatus() {
        return this.orderStatusRepository.getAllOrderStatus();
    }
    getByKey(key) {
        return this.orderStatusRepository.getByKey(key);
    }
}
exports.OrderStatusUseCase = OrderStatusUseCase;
//# sourceMappingURL=orderStatusUseCase.js.map