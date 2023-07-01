import { Customer } from "core/domain/customer";
import CustomerModel from "infra/models/customerModel";

export class CustomerMap {
  static Convert(message: string, customer?: CustomerModel): Partial<Customer> {
    let partialCustomer: Partial<Customer> = {};
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
    } else {
      partialCustomer = {
        uuid: customer.uuid,
        firstName: customer.firstName,
        lastName: customer.lastName as string,
        cellphone: customer.cellphone,
        document: customer.document,
        email: customer.email,
        message,
      };
    }
    return partialCustomer;
  }
}
