"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerUseCase = void 0;
class CustomerUseCase {
    constructor(customerRepository) {
        this.customerRepository = customerRepository;
    }
    getCustomerByDocument(document) {
        return this.customerRepository.getCustomerByDocument(document);
    }
    getCustomerByMail(mail) {
        return this.customerRepository.getCustomerByEmail(mail);
    }
    addCustomer(body) {
        return this.customerRepository.addCustomer(body);
    }
}
exports.CustomerUseCase = CustomerUseCase;
//# sourceMappingURL=customerUseCase.js.map