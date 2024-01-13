"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderStatusController = void 0;
class OrderStatusController {
    constructor(orderStatusUseCase) {
        this.orderStatusUseCase = orderStatusUseCase;
    }
    async addOrderStatus(req, res) {
        const orderStatus = req.body;
        const results = await this.orderStatusUseCase.addOrderStatus(orderStatus);
        const responseData = results.map(result => ({
            uuid: result.uuid,
            key: result.key,
            name: result.name,
        }));
        res.status(200).json(responseData);
    }
    async getAllOrderStatus(req, res) {
        const result = await this.orderStatusUseCase.getAllOrderStatus();
        res.status(200).json(result);
    }
}
exports.OrderStatusController = OrderStatusController;
//# sourceMappingURL=orderStatusController.js.map