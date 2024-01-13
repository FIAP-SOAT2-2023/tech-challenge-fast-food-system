import CustomerModel from "../../infra/persistence/models/customerModel";
import {Customer} from "../../core/domain/entities/customer";


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
      };
    }
    return partialCustomer;
  }

  static ConvertSimple(customer?: CustomerModel): Partial<Customer> {
    return this.Convert("", customer);
  }
}
