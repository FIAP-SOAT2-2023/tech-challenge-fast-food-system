import CustomerModel from "infra/models/customerModel";
import { Customer } from "core/domain/customer";

export interface ICustomerServicePortIn {
  addCustomer(body: Customer): Promise<Customer>;
  getCustomerByDocument(document: string): Promise<Customer>;
}
