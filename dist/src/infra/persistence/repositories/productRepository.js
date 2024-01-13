"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductRepository = void 0;
const tsyringe_1 = require("tsyringe");
const productModel_1 = __importDefault(require("../models/productModel"));
let ProductRepository = exports.ProductRepository = class ProductRepository {
    async addProduct(body) {
        const result = await productModel_1.default.create({
            name: body.name,
            description: body.description,
            image: body.image,
            unitPrice: body.unitPrice,
            category: body.category,
        });
        return result;
    }
    async getProductById(id) {
        const product = await productModel_1.default.findOne({
            where: {
                uuid: id,
            },
            attributes: {
                exclude: ["id"],
            },
        });
        if (!product) {
            throw new Error("Produto não encontrado");
        }
        return product;
    }
    async getAllProduct(filters) {
        const { category } = filters;
        const whereOptions = {};
        if (category !== undefined) {
            whereOptions.category = category;
        }
        const products = await productModel_1.default.findAll({
            where: whereOptions,
            attributes: {
                exclude: ["id"],
            },
        });
        return products;
    }
    async putProductById(id, body) {
        const { name, description, image, unitPrice, category } = body;
        const [rowsUpdated] = await productModel_1.default.update({
            name,
            description,
            image,
            unitPrice,
            category,
        }, {
            where: { uuid: id },
        });
        if (rowsUpdated !== 1) {
            throw new Error("Produto não encontrado");
        }
        const updatedProduct = await productModel_1.default.findOne({
            where: { uuid: id },
            attributes: {
                exclude: ["id"],
            },
        });
        if (!updatedProduct) {
            throw new Error("Erro ao recuperar o produto atualizado");
        }
        return updatedProduct;
    }
    async deleteProductById(id) {
        const rowsDeleted = await productModel_1.default.destroy({
            where: { uuid: id },
        });
        if (rowsDeleted === 0) {
            throw new Error("Produto não encontrado");
        }
    }
};
exports.ProductRepository = ProductRepository = __decorate([
    (0, tsyringe_1.injectable)()
], ProductRepository);
//# sourceMappingURL=productRepository.js.map