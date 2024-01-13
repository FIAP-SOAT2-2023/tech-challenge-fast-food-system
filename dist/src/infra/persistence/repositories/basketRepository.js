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
exports.BasketRepository = void 0;
const itemModel_1 = __importDefault(require("../models/itemModel"));
const basketsModel_1 = __importDefault(require("../models/basketsModel"));
const productModel_1 = __importDefault(require("../models/productModel"));
const customerModel_1 = __importDefault(require("../models/customerModel"));
const uuid_1 = require("uuid");
class BasketRepository {
    createBasket(basketNew) {
        return new Promise(async (resolve, reject) => {
            const { customer, isTakeOut, totalPrice } = basketNew;
            const customerModel = await customerModel_1.default.findOne({
                where: {
                    uuid: customer === null || customer === void 0 ? void 0 : customer.uuid,
                },
            });
            let basketCreated = await basketsModel_1.default.create({
                isTakeOut, totalPrice,
                uuid: (0, uuid_1.v4)(),
                customerId: customerModel === null || customerModel === void 0 ? void 0 : customerModel.id
            });
            const { items } = basketNew;
            for (const itemRequest of items) {
                const product = await productModel_1.default.findOne({
                    where: {
                        uuid: itemRequest.productId
                    }
                });
                if (product == null) {
                    reject(new Error());
                    continue;
                }
                let itemModel = await itemModel_1.default.create(Object.assign(Object.assign({}, itemRequest), { productId: product.id }));
                await basketCreated.addItem(itemModel);
            }
            const _a = basketCreated.dataValues, { id, customerId } = _a, basketValues = __rest(_a, ["id", "customerId"]);
            const _b = basketCreated.dataValues, { id: idPayment, createdAt, updatedAt, uuid } = _b, paymentValues = __rest(_b, ["id", "createdAt", "updatedAt", "uuid"]);
            let basketResult = Object.assign(Object.assign({}, basketValues), { paymentId: uuid, items });
            resolve(basketResult);
        });
    }
}
exports.BasketRepository = BasketRepository;
//# sourceMappingURL=basketRepository.js.map