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
exports.PaymentRequest = void 0;
const class_validator_1 = require("class-validator");
class PaymentRequest {
}
exports.PaymentRequest = PaymentRequest;
__decorate([
    (0, class_validator_1.Length)(2, 100, { message: 'QrCode should be between 2 and 100 characters' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'QrCode is required' }),
    __metadata("design:type", String)
], PaymentRequest.prototype, "qrCode", void 0);
__decorate([
    (0, class_validator_1.Length)(2, 100, { message: 'NSU should be between 2 and 100 characters' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'NSU is required' }),
    __metadata("design:type", String)
], PaymentRequest.prototype, "nsu", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'Status is required' }),
    __metadata("design:type", String)
], PaymentRequest.prototype, "status", void 0);
__decorate([
    (0, class_validator_1.IsDate)(),
    (0, class_validator_1.IsNotEmpty)({ message: 'PaidAT is required' }),
    __metadata("design:type", Date)
], PaymentRequest.prototype, "paidAt", void 0);
__decorate([
    (0, class_validator_1.Length)(2, 10, { message: 'TotalPrice should be between 2 and 10 characters' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'TotalPrice is required' }),
    __metadata("design:type", Number)
], PaymentRequest.prototype, "totalPrice", void 0);
//# sourceMappingURL=paymentRequest.js.map