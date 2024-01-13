"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductRequest = void 0;
const class_validator_1 = require("class-validator");
class ProductRequest {
}
exports.ProductRequest = ProductRequest;
__decorate([
    (0, class_validator_1.Length)(2, 50, { message: 'Name should be between 2 and 50 characters' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'Name is required' }),
    __metadata("design:type", String)
], ProductRequest.prototype, "name", void 0);
__decorate([
    (0, class_validator_1.Length)(2, 100, { message: 'Description should be between 2 and 100 characters' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'Description is required' }),
    __metadata("design:type", String)
], ProductRequest.prototype, "description", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'Image is required' }),
    __metadata("design:type", String)
], ProductRequest.prototype, "image", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsNotEmpty)({ message: 'Unit price is required' }),
    __metadata("design:type", Number)
], ProductRequest.prototype, "unitPrice", void 0);
__decorate([
    (0, class_validator_1.Length)(6, 20, { message: 'Category should be Lanche, Acompanhamento, Bebida, Sobremesa' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'Category is required' }),
    __metadata("design:type", String)
], ProductRequest.prototype, "category", void 0);
//# sourceMappingURL=productRequest.js.map