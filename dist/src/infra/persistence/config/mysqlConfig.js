"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const orderStatusModel_1 = __importDefault(require("../models/orderStatusModel"));
const basketsModel_1 = __importDefault(require("../models/basketsModel"));
const customerModel_1 = __importDefault(require("../models/customerModel"));
const addressModel_1 = __importDefault(require("../models/addressModel"));
const orderModel_1 = __importDefault(require("../models/orderModel"));
const paymentModel_1 = __importDefault(require("../models/paymentModel"));
const itemModel_1 = __importDefault(require("../models/itemModel"));
exports.default = () => {
    basketsModel_1.default.sync();
    itemModel_1.default.sync();
    paymentModel_1.default.sync();
    customerModel_1.default.sync();
    addressModel_1.default.sync();
    orderModel_1.default.sync();
    paymentModel_1.default.sync();
    orderStatusModel_1.default.sync();
};
//# sourceMappingURL=mysqlConfig.js.map