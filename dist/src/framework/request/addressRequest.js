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
exports.AddressRequest = void 0;
const class_validator_1 = require("class-validator");
class AddressRequest {
}
exports.AddressRequest = AddressRequest;
__decorate([
    (0, class_validator_1.Length)(2, 50, {
        message: "streetName should be between 2 and 50 characters",
    }),
    (0, class_validator_1.IsNotEmpty)({ message: "streetName is required" }),
    __metadata("design:type", String)
], AddressRequest.prototype, "streetName", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: "number is required" }),
    __metadata("design:type", String)
], AddressRequest.prototype, "number", void 0);
__decorate([
    (0, class_validator_1.Length)(2, 50, {
        message: "neighborhood should be between 2 and 50 characters",
    }),
    (0, class_validator_1.IsNotEmpty)({ message: "neighborhood is required" }),
    __metadata("design:type", String)
], AddressRequest.prototype, "neighborhood", void 0);
__decorate([
    (0, class_validator_1.Max)(9, { message: "zipCode should 9 characters" }),
    (0, class_validator_1.IsNotEmpty)({ message: "zipCode is required" }),
    __metadata("design:type", String)
], AddressRequest.prototype, "zipCode", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: "state is required" }),
    __metadata("design:type", String)
], AddressRequest.prototype, "state", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: "city is required" }),
    __metadata("design:type", String)
], AddressRequest.prototype, "city", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: "country is required" }),
    __metadata("design:type", String)
], AddressRequest.prototype, "country", void 0);
//# sourceMappingURL=addressRequest.js.map