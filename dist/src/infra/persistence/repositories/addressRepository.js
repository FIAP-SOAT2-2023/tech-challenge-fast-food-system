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
exports.AddressRepository = void 0;
const tsyringe_1 = require("tsyringe");
const addressModel_1 = __importDefault(require("../models/addressModel"));
let AddressRepository = exports.AddressRepository = class AddressRepository {
    async addAddress(body) {
        const result = await addressModel_1.default.create(Object.assign({}, body));
        return body;
    }
};
exports.AddressRepository = AddressRepository = __decorate([
    (0, tsyringe_1.injectable)()
], AddressRepository);
//# sourceMappingURL=addressRepository.js.map