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
exports.BasketRequest = void 0;
const class_validator_1 = require("class-validator");
class BasketRequest {
}
exports.BasketRequest = BasketRequest;
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'customer is required' }),
    __metadata("design:type", String)
], BasketRequest.prototype, "customerId", void 0);
__decorate([
    (0, class_validator_1.Max)(10, { message: 'Total Price should be between 2 and 10 characters' }),
    (0, class_validator_1.Min)(2, { message: 'Total Price should be between 2 and 10 characters' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'Total Price is required' }),
    __metadata("design:type", Number)
], BasketRequest.prototype, "totalPrice", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'Item is required' }),
    __metadata("design:type", Array)
], BasketRequest.prototype, "items", void 0);
//# sourceMappingURL=basketRequest.js.map