"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const connection_1 = __importDefault(require("../database/connection"));
const sequelize_1 = require("sequelize");
class PaymentModel extends sequelize_1.Model {
}
PaymentModel.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true
    },
    uuid: {
        type: sequelize_1.DataTypes.UUID,
        primaryKey: true,
        allowNull: false,
        defaultValue: sequelize_1.DataTypes.UUIDV4
    },
    status: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true,
        defaultValue: "PENDING"
    },
    nsu: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true
    },
    qrCode: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true
    },
    paidAt: { type: sequelize_1.DataTypes.DATE },
    createdAt: sequelize_1.DataTypes.DATE,
    updatedAt: sequelize_1.DataTypes.DATE,
}, {
    sequelize: connection_1.default,
    modelName: "Payments",
});
exports.default = PaymentModel;
//# sourceMappingURL=paymentModel.js.map