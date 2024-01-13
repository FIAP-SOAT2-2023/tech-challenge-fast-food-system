"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const customerModel_1 = __importDefault(require("./customerModel"));
const connection_1 = __importDefault(require("../database/connection"));
const sequelize_1 = require("sequelize");
const itemModel_1 = __importDefault(require("./itemModel"));
class BasketModel extends sequelize_1.Model {
}
BasketModel.init({
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
    isTakeOut: {
        type: sequelize_1.DataTypes.BOOLEAN,
        allowNull: false,
    },
    totalPrice: {
        type: sequelize_1.DataTypes.FLOAT,
        allowNull: false,
    },
    createdAt: sequelize_1.DataTypes.DATE,
    updatedAt: sequelize_1.DataTypes.DATE,
}, {
    sequelize: connection_1.default,
    modelName: "Basket",
});
BasketModel.hasMany(itemModel_1.default, {
    sourceKey: 'id',
    foreignKey: 'basketId',
    as: 'items'
});
customerModel_1.default.hasMany(BasketModel, {
    sourceKey: 'id',
    foreignKey: 'customerId',
    as: 'baskets'
});
exports.default = BasketModel;
//# sourceMappingURL=basketsModel.js.map