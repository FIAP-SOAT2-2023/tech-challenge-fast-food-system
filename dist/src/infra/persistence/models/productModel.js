"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../database/connection"));
class ProductModel extends sequelize_1.Model {
}
ProductModel.init({
    uuid: {
        type: sequelize_1.DataTypes.UUID,
        defaultValue: sequelize_1.DataTypes.UUIDV4,
    },
    name: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    description: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true,
    },
    image: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true,
    },
    unitPrice: {
        type: sequelize_1.DataTypes.FLOAT,
        allowNull: false,
    },
    category: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true,
        validate: {
            isIn: {
                args: [["Lanche", "Acompanhamento", "Bebida", "Sobremesa"]],
                msg: "Categoria inválida",
            },
        },
    },
}, {
    sequelize: connection_1.default,
    modelName: "Product",
});
exports.default = ProductModel;
//# sourceMappingURL=productModel.js.map