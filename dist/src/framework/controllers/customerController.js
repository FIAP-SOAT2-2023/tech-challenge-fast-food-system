"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerController = void 0;
const validateRequest_1 = require("../validation/validateRequest");
const customerRequest_1 = require("../request/customerRequest");
class CustomerController {
    constructor(customerUseCase, addressUseCase) {
        this.customerUseCase = customerUseCase;
        this.addressUseCase = addressUseCase;
    }
    async getCustomerByDocument(req, res) {
        const document = req.params.document;
        const customer = await this.customerUseCase.getCustomerByDocument(document);
        if (customer.message) {
            res.status(404).json(customer);
        }
        else {
            res.status(200).json(customer);
        }
    }
    async getCustomerByEmail(req, res) {
        const mail = req.params.mail;
        const customer = await this.customerUseCase.getCustomerByMail(mail);
        if (customer.message) {
            res.status(404).json(customer);
        }
        else {
            res.status(200).json(customer);
        }
    }
    async addCustomer(req, res) {
        const customerRequest = await validateRequest_1.ValidationUtil.validateAndTransform(customerRequest_1.CustomerRequest, req.body, res);
        const result = await this.customerUseCase.addCustomer(customerRequest);
        let address = Object.assign(Object.assign({}, req.body.address), { customerId: result.uuid });
        await this.addressUseCase.addAddress(address);
        res.status(201).json(result);
    }
}
exports.CustomerController = CustomerController;
//# sourceMappingURL=customerController.js.map