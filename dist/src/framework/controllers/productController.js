"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductController = void 0;
const validateRequest_1 = require("../validation/validateRequest");
const productRequest_1 = require("../request/productRequest");
class ProductController {
    constructor(productUseCase) {
        this.productUseCase = productUseCase;
    }
    async addProduct(req, res) {
        const product = await validateRequest_1.ValidationUtil.validateAndTransform(productRequest_1.ProductRequest, req.body, res);
        const result = await this.productUseCase.addProduct(product);
        const data = {
            uuid: result.uuid,
            name: result.name,
            image: result.image,
            unitPrice: result.unitPrice,
            description: result.description,
        };
        res.status(201).json(data);
    }
    async getProductById(req, res) {
        const id = req.params.id;
        const result = await this.productUseCase.getProductById(id);
        res.status(200).json(result);
    }
    async getAllProduct(req, res) {
        const filters = req.query;
        const result = await this.productUseCase.getAllProduct(filters);
        res.status(200).json(result);
    }
    async putProductById(req, res) {
        const id = req.params.id;
        const product = await validateRequest_1.ValidationUtil.validateAndTransform(productRequest_1.ProductRequest, req.body, res);
        const result = await this.productUseCase.putProductById(id, product);
        res.status(200).json(result);
    }
    async deleteProductById(req, res) {
        const id = req.params.id;
        await this.productUseCase.deleteProductById(id);
        res.sendStatus(204);
    }
}
exports.ProductController = ProductController;
//# sourceMappingURL=productController.js.map