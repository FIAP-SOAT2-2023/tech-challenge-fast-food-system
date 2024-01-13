"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const basketsModel_1 = __importDefault(require("./basketsModel"));
const connection_1 = __importDefault(require("../database/connection"));
const paymentModel_1 = __importDefault(require("./paymentModel"));
const orderStatusModel_1 = __importDefault(require("./orderStatusModel"));
class OrderModel extends sequelize_1.Model {
}
OrderModel.init({
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
    code: {
        type: sequelize_1.DataTypes.STRING,
        primaryKey: false,
        allowNull: false
    },
    doneAt: { type: sequelize_1.DataTypes.DATE, allowNull: true },
    expected: { type: sequelize_1.DataTypes.DATE },
    createdAt: sequelize_1.DataTypes.DATE,
    updatedAt: sequelize_1.DataTypes.DATE
}, {
    sequelize: connection_1.default,
    modelName: "Orders",
});
OrderModel.belongsTo(orderStatusModel_1.default, { targetKey: 'id', foreignKey: 'statusId', as: 'status' });
OrderModel.belongsTo(basketsModel_1.default, { targetKey: 'id', foreignKey: 'basketId' });
OrderModel.belongsTo(paymentModel_1.default, { targetKey: 'id', foreignKey: 'paymentId' });
exports.default = OrderModel;
//# sourceMappingURL=orderModel.js.map