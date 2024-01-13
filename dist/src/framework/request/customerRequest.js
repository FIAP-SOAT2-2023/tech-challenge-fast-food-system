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
exports.CustomerRequest = void 0;
const class_validator_1 = require("class-validator");
class CustomerRequest {
}
exports.CustomerRequest = CustomerRequest;
__decorate([
    (0, class_validator_1.Length)(2, 50, {
        message: "firstName should be between 2 and 50 characters",
    }),
    (0, class_validator_1.IsNotEmpty)({ message: "firstName is required" }),
    __metadata("design:type", String)
], CustomerRequest.prototype, "firstName", void 0);
__decorate([
    (0, class_validator_1.Length)(2, 50, { message: "lastName should be between 2 and 50 characters" }),
    (0, class_validator_1.IsNotEmpty)({ message: "lastName is required" }),
    __metadata("design:type", String)
], CustomerRequest.prototype, "lastName", void 0);
__decorate([
    (0, class_validator_1.Length)(11, 11, { message: "document should 11 characters" }),
    (0, class_validator_1.IsNotEmpty)({ message: "document is required" }),
    __metadata("design:type", String)
], CustomerRequest.prototype, "document", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: "email is required" }),
    (0, class_validator_1.IsEmail)(),
    __metadata("design:type", String)
], CustomerRequest.prototype, "email", void 0);
__decorate([
    (0, class_validator_1.Length)(11, 11, { message: "cellphone should 11 characters" }),
    (0, class_validator_1.IsNotEmpty)({ message: "cellphone is required" }),
    __metadata("design:type", String)
], CustomerRequest.prototype, "cellphone", void 0);
//# sourceMappingURL=customerRequest.js.map