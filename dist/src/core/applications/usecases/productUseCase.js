"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductUseCase = void 0;
class ProductUseCase {
    constructor(productRepository) {
        this.productRepository = productRepository;
    }
    addProduct(body) {
        return this.productRepository.addProduct(body);
    }
    getProductById(id) {
        return this.productRepository.getProductById(id);
    }
    getAllProduct(filters) {
        return this.productRepository.getAllProduct(filters);
    }
    putProductById(id, body) {
        return this.productRepository.putProductById(id, body);
    }
    deleteProductById(id) {
        return this.productRepository.deleteProductById(id);
    }
}
exports.ProductUseCase = ProductUseCase;
//# sourceMappingURL=productUseCase.js.map