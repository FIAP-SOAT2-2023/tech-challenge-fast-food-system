"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerMap = void 0;
class CustomerMap {
    static Convert(message, customer) {
        let partialCustomer = {};
        if (!customer) {
            partialCustomer = {
                uuid: undefined,
                firstName: undefined,
                lastName: undefined,
                cellphone: undefined,
                document: undefined,
                email: undefined,
                message: "Cliente não encontrado",
            };
        }
        else {
            partialCustomer = {
                uuid: customer.uuid,
                firstName: customer.firstName,
                lastName: customer.lastName,
                cellphone: customer.cellphone,
                document: customer.document,
                email: customer.email,
            };
        }
        return partialCustomer;
    }
    static ConvertSimple(customer) {
        return this.Convert("", customer);
    }
}
exports.CustomerMap = CustomerMap;
//# sourceMappingURL=customerMap.js.map