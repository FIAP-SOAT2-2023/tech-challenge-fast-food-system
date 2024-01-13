"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderRepository = void 0;
const sequelize_1 = require("sequelize");
const orderStatusModel_1 = __importDefault(require("../models/orderStatusModel"));
const orderStatus_1 = __importDefault(require("../../../framework/enum/orderStatus"));
const basketsModel_1 = __importDefault(require("../models/basketsModel"));
const paymentModel_1 = __importDefault(require("../models/paymentModel"));
const orderModel_1 = __importDefault(require("../models/orderModel"));
const basketsModel_2 = __importDefault(require("../models/basketsModel"));
const itemModel_1 = __importDefault(require("../models/itemModel"));
class OrderRepository {
    async createOrder(orderNew) {
        return new Promise(async (resolve) => {
            const { basket, payment, status } = orderNew;
            const basketModel = await basketsModel_1.default.findOne({ where: { uuid: basket === null || basket === void 0 ? void 0 : basket.uuid } });
            const paymentModel = await paymentModel_1.default.findOne({ where: { nsu: payment === null || payment === void 0 ? void 0 : payment.nsu } });
            const orderStatusModel = await orderStatusModel_1.default.findOne({ where: { key: status.key } });
            const codeNumber = basketModel ? basketModel.id * 2 : 1;
            const codeNew = `ORD-${codeNumber}${paymentModel === null || paymentModel === void 0 ? void 0 : paymentModel.id}`;
            let orderCreated = await orderModel_1.default.create({
                statusId: orderStatusModel === null || orderStatusModel === void 0 ? void 0 : orderStatusModel.id,
                basketId: basketModel === null || basketModel === void 0 ? void 0 : basketModel.id,
                paymentId: paymentModel === null || paymentModel === void 0 ? void 0 : paymentModel.id,
                expected: orderNew.expected,
                code: codeNew
            });
            const { uuid, status: statusCreated, expected, createdAt, code } = orderCreated;
            const orderResult = Object.assign(Object.assign({}, orderNew), { uuid, statusCreated, expected, createdAt, code });
            resolve(orderResult);
        });
    }
    async getAllPendingOrders() {
        return new Promise(async (resolve, reject) => {
            var _a, _b, _c;
            const listOrdersFromDatabase = await orderModel_1.default.findAll({
                include: [
                    {
                        model: orderStatusModel_1.default, as: 'status',
                        where: {
                            key: {
                                [sequelize_1.Op.not]: orderStatus_1.default.DONE
                            }
                        }
                    }
                ],
                order: [
                    [
                        sequelize_1.Sequelize.fn("FIELD", sequelize_1.Sequelize.col("status.key"), orderStatus_1.default.READY, orderStatus_1.default.PREPARATION, orderStatus_1.default.RECEIVED),
                        "ASC"
                    ],
                    ["createdAt", "DESC"]
                ]
            });
            let orderList = [];
            for (const orderFromDatabase of listOrdersFromDatabase) {
                const basket = await basketsModel_2.default.findOne({ where: {
                        id: orderFromDatabase.basketId
                    } });
                if (basket != null)
                    basket.items = await itemModel_1.default.findAll({ where: {
                            basketId: basket === null || basket === void 0 ? void 0 : basket.id
                        } });
                const order = {
                    uuid: orderFromDatabase.uuid,
                    doneAt: orderFromDatabase.doneAt,
                    expected: orderFromDatabase.expected,
                    createdAt: orderFromDatabase.createdAt,
                    status: {
                        key: (_a = orderFromDatabase === null || orderFromDatabase === void 0 ? void 0 : orderFromDatabase.status) === null || _a === void 0 ? void 0 : _a.key,
                        name: (_b = orderFromDatabase === null || orderFromDatabase === void 0 ? void 0 : orderFromDatabase.status) === null || _b === void 0 ? void 0 : _b.name,
                    },
                    basket: {
                        totalPrice: basket === null || basket === void 0 ? void 0 : basket.totalPrice,
                        isTakeOut: basket === null || basket === void 0 ? void 0 : basket.isTakeOut,
                        items: (_c = basket === null || basket === void 0 ? void 0 : basket.items.map(maping => {
                            return {
                                id: maping.id,
                                quantity: maping.quantity,
                                unitPrice: maping.unitPrice,
                                observations: maping.observations,
                                basketId: maping.basketId,
                                productId: maping.productId,
                                createdAt: maping.createdAt,
                                updatedAt: maping.updatedAt,
                            };
                        })) !== null && _c !== void 0 ? _c : [],
                    }
                };
                orderList.push(order);
            }
            return resolve(orderList);
        });
    }
    async updateOrderById(id, body) {
        return new Promise(async (resolve) => {
            var _a, _b;
            const order = await orderModel_1.default.findOne({
                where: {
                    uuid: id
                }
            });
            if (!order) {
                throw new Error('Pedido não encontrado.');
            }
            const orderStatus = await orderStatusModel_1.default.findOne({
                where: {
                    key: body.status.key
                }
            });
            if (!orderStatus) {
                throw new Error('Status de pedido não encontrado.');
            }
            await order.update({ statusId: orderStatus === null || orderStatus === void 0 ? void 0 : orderStatus.id }, { where: { uuid: id } });
            const orderUpdated = await orderModel_1.default.findOne({
                where: {
                    uuid: id
                },
                include: [
                    { model: orderStatusModel_1.default, as: 'status' },
                ]
            });
            resolve({
                uuid: orderUpdated === null || orderUpdated === void 0 ? void 0 : orderUpdated.uuid,
                code: orderUpdated === null || orderUpdated === void 0 ? void 0 : orderUpdated.code,
                doneAt: orderUpdated === null || orderUpdated === void 0 ? void 0 : orderUpdated.doneAt,
                expected: orderUpdated === null || orderUpdated === void 0 ? void 0 : orderUpdated.expected,
                createdAt: orderUpdated === null || orderUpdated === void 0 ? void 0 : orderUpdated.createdAt,
                updatedAt: orderUpdated === null || orderUpdated === void 0 ? void 0 : orderUpdated.updatedAt,
                status: {
                    key: (_a = orderUpdated === null || orderUpdated === void 0 ? void 0 : orderUpdated.status) === null || _a === void 0 ? void 0 : _a.key,
                    name: (_b = orderUpdated === null || orderUpdated === void 0 ? void 0 : orderUpdated.status) === null || _b === void 0 ? void 0 : _b.name,
                }
            });
        });
    }
}
exports.OrderRepository = OrderRepository;
//# sourceMappingURL=orderRepository.js.map