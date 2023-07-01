import CustomerModel from "infra/models/customerModel";
import { Customer } from "core/domain/customer";

export interface ICustomerRepository {
  getCustomerByDocument(document: string): Promise<Customer>;

  addCustomer(body: Customer): Promise<CustomerModel>;

  findByUUID(customerId: string): Promise<Customer>
}
