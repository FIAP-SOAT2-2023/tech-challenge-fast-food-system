"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BasketController = void 0;
const basketRequest_1 = require("../request/basketRequest");
const validateRequest_1 = require("../validation/validateRequest");
class BasketController {
    constructor(basketUseCase) {
        this.basketUseCase = basketUseCase;
    }
    async create(req, res) {
        var _a;
        const basketRequest = await validateRequest_1.ValidationUtil.validateAndTransform(basketRequest_1.BasketRequest, req.body, res);
        this.basketUseCase
            .createBasket(req.body.customerId, basketRequest, (_a = basketRequest.payment) !== null && _a !== void 0 ? _a : {})
            .then((basketCreated) => {
            res.status(200).json({ checkout: basketCreated.checkoutUrl, order: basketCreated.order });
        })
            .catch((error) => {
            console.error(error);
            res.json(JSON.stringify({ message: error })).sendStatus(400);
        });
    }
    async getAllPendingOrders(req, res) {
        this.basketUseCase
            .getAllPendingOrders()
            .then((orders) => {
            res.status(200).json({ orders: orders });
        })
            .catch((error) => {
            console.error(error);
            res.json(JSON.stringify({ message: error })).sendStatus(400);
        });
    }
}
exports.BasketController = BasketController;
//# sourceMappingURL=basketController.js.map