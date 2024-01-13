"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentRepository = void 0;
const sequelize_1 = require("sequelize");
const paymentModel_1 = __importDefault(require("../models/paymentModel"));
class PaymentRepository {
    async getPaymentByOrderId(orderId) {
        return new Promise(async (resolve, reject) => {
            const paymentModel = await paymentModel_1.default.findOne({
                where: {
                    [sequelize_1.Op.or]: [
                        { uuid: orderId },
                        { nsu: orderId }
                    ]
                },
            });
            if (paymentModel == null) {
                reject(new Error("pagamento não cadastrado"));
                return;
            }
            const paymentValues = __rest(paymentModel === null || paymentModel === void 0 ? void 0 : paymentModel.dataValues, []);
            const paymentResult = Object.assign({}, paymentValues);
            resolve(paymentResult);
        });
    }
    async createPayment(paymentNew) {
        return new Promise(async (resolve) => {
            let paymentCreated = await paymentModel_1.default.create(paymentNew);
            const _a = paymentCreated.dataValues, { id: idPayment, createdAt, updatedAt } = _a, paymentValues = __rest(_a, ["id", "createdAt", "updatedAt"]);
            const payment = Object.assign({}, paymentValues);
            resolve(payment);
        });
    }
    async updatePaymentStatusByNsu(body) {
        return new Promise(async (resolve) => {
            const payment = await paymentModel_1.default.findOne({
                where: {
                    nsu: body.nsu
                }
            });
            if (!payment) {
                throw new Error('Nsu não encontrado.');
            }
            const paymentUpddated = await payment.update({
                status: body.status,
                paidAt: new Date()
            });
            resolve({
                nsu: paymentUpddated.nsu,
                status: paymentUpddated.status
            });
        });
    }
}
exports.PaymentRepository = PaymentRepository;
//# sourceMappingURL=paymentRepository.js.map