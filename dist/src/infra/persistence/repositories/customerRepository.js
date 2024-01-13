"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerRepository = void 0;
const tsyringe_1 = require("tsyringe");
const customer_1 = require("../../../core/domain/entities/customer");
const customerMap_1 = require("../../../framework/mapper/customerMap");
const customerModel_1 = __importDefault(require("../models/customerModel"));
let CustomerRepository = exports.CustomerRepository = class CustomerRepository {
    async getCustomerByDocument(document) {
        let message = "";
        let partialCustomer = {};
        const customer = await customerModel_1.default.findOne({
            where: {
                document: document,
            },
        });
        if (!(0, customer_1.isValidCPF)(document)) {
            message = "Documento inválido!";
        }
        if (!customer) {
            partialCustomer = customerMap_1.CustomerMap.Convert(message, undefined);
        }
        else {
            partialCustomer = customerMap_1.CustomerMap.Convert(message, customer);
        }
        return partialCustomer;
    }
    async addCustomer(body) {
        if (!(0, customer_1.isValidCPF)(body.document)) {
            throw new Error("Documento inválido!");
        }
        let customer = await customerModel_1.default.create(Object.assign({}, body));
        return customerMap_1.CustomerMap.ConvertSimple(customer);
    }
    async findByUUID(customerId) {
        return new Promise(async (resolve, reject) => {
            const customerModel = await customerModel_1.default.findOne({
                where: {
                    uuid: customerId,
                },
            });
            if (customerModel == null) {
                reject(new Error("Usuario não cadastrado"));
                return;
            }
            const customerValues = __rest(customerModel === null || customerModel === void 0 ? void 0 : customerModel.dataValues, []);
            const customerResult = Object.assign({}, customerValues);
            resolve(customerResult);
        });
    }
    async getCustomerByEmail(email) {
        let message = "";
        let partialCustomer = {};
        const customer = await customerModel_1.default.findOne({
            where: {
                email: email,
            },
        });
        if (!customer) {
            partialCustomer = customerMap_1.CustomerMap.Convert(message, undefined);
        }
        else {
            partialCustomer = customerMap_1.CustomerMap.Convert(message, customer);
        }
        return partialCustomer;
    }
};
exports.CustomerRepository = CustomerRepository = __decorate([
    (0, tsyringe_1.injectable)()
], CustomerRepository);
//# sourceMappingURL=customerRepository.js.map