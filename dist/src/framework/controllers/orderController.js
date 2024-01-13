"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderController = void 0;
const validateRequest_1 = require("../validation/validateRequest");
const orderRequest_1 = require("../request/orderRequest");
class OrderController {
    constructor(orderUseCase) {
        this.orderUseCase = orderUseCase;
    }
    async updateOrderById(req, res) {
        const id = req.params.id;
        const order = await validateRequest_1.ValidationUtil.validateAndTransform(orderRequest_1.OrderRequest, req.body, res);
        const result = await this.orderUseCase.updateOrderById(id, order);
        res.status(200).json(result);
    }
}
exports.OrderController = OrderController;
//# sourceMappingURL=orderController.js.map