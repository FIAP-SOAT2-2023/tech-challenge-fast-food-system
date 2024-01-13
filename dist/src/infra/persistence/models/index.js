"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const connection_1 = __importDefault(require("../database/connection"));
const basketsModel_1 = __importDefault(require("../models/basketsModel"));
const itemModel_1 = __importDefault(require("../models/itemModel"));
const productModel_1 = __importDefault(require("../models/productModel"));
basketsModel_1.default.hasMany(itemModel_1.default, { as: 'items', onDelete: 'cascade' });
itemModel_1.default.belongsTo(basketsModel_1.default);
itemModel_1.default.belongsTo(productModel_1.default, { as: 'product' });
productModel_1.default.hasMany(itemModel_1.default, { onDelete: 'cascade' });
connection_1.default.sync()
    .then(() => {
    console.log('Models synchronized with database');
});
//# sourceMappingURL=index.js.map