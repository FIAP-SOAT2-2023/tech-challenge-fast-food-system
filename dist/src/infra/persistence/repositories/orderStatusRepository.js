"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderStatusRepository = void 0;
const orderStatusModel_1 = __importDefault(require("../models/orderStatusModel"));
class OrderStatusRepository {
    async addOrderStatus(body) {
        const createdStatus = await orderStatusModel_1.default.bulkCreate(body.map(status => ({
            key: status.key,
            name: status.name,
        })));
        return createdStatus;
    }
    async getAllOrderStatus() {
        const orderStatus = await orderStatusModel_1.default.findAll({
            attributes: {
                exclude: ["id"],
            },
        });
        return orderStatus;
    }
    async getByKey(key) {
        const orderStatus = await orderStatusModel_1.default.findOne({
            where: {
                key: key,
            },
        });
        if (!orderStatus) {
            throw new Error("Status não encontrado");
        }
        return orderStatus;
    }
}
exports.OrderStatusRepository = OrderStatusRepository;
//# sourceMappingURL=orderStatusRepository.js.map