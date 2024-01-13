"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../database/connection"));
class AddressModel extends sequelize_1.Model {
}
AddressModel.init({
    uuid: {
        type: sequelize_1.DataTypes.UUID,
        defaultValue: sequelize_1.DataTypes.UUIDV4,
    },
    customerId: {
        type: sequelize_1.DataTypes.UUID,
    },
    streetName: {
        type: sequelize_1.DataTypes.STRING,
    },
    number: {
        type: sequelize_1.DataTypes.STRING,
    },
    neighborhood: {
        type: sequelize_1.DataTypes.STRING,
    },
    complement: {
        type: sequelize_1.DataTypes.STRING,
    },
    zipCode: {
        type: sequelize_1.DataTypes.STRING,
    },
    state: {
        type: sequelize_1.DataTypes.STRING,
    },
    city: {
        type: sequelize_1.DataTypes.STRING,
    },
    country: {
        type: sequelize_1.DataTypes.STRING,
    },
}, {
    sequelize: connection_1.default,
    modelName: "Address",
});
exports.default = AddressModel;
//# sourceMappingURL=addressModel.js.map