import { Customer } from "../entities/customer";

export interface ICustomerRepository {
  getCustomerByDocument(document: string): Promise<Customer>;

  getCustomerByEmail(email: string): Promise<Customer>;

  addCustomer(body: Customer): Promise<Customer>;

  findByUUID(customerId: string): Promise<Customer>;
}
