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
exports.ItemRequest = void 0;
const class_validator_1 = require("class-validator");
class ItemRequest {
}
exports.ItemRequest = ItemRequest;
__decorate([
    (0, class_validator_1.Max)(20, { message: 'name should be between 2 and 100 characters' }),
    (0, class_validator_1.Min)(10, { message: 'name should be between 2 and 100 characters' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'productId is required' }),
    __metadata("design:type", Number)
], ItemRequest.prototype, "productId", void 0);
__decorate([
    (0, class_validator_1.Min)(1, { message: "number should be between 1 and 100 characters" }),
    (0, class_validator_1.Max)(100, { message: "number should be between 1 and 100 characters" }),
    (0, class_validator_1.IsNotEmpty)({ message: 'quantity is required' }),
    __metadata("design:type", Number)
], ItemRequest.prototype, "quantity", void 0);
__decorate([
    (0, class_validator_1.Min)(1, { message: "unitPrice should be between 1 and 1000000 characters" }),
    (0, class_validator_1.Max)(1000000, { message: "unitPrice should be between 1 and 1000000 characters" }),
    __metadata("design:type", Number)
], ItemRequest.prototype, "unitPrice", void 0);
__decorate([
    (0, class_validator_1.MaxLength)(100, { message: "observations should max 100 characters" }),
    __metadata("design:type", String)
], ItemRequest.prototype, "observations", void 0);
//# sourceMappingURL=ItemRequest.js.map