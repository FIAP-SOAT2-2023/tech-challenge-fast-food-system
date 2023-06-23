import { Customer } from "../../../domain/customer";

export interface ICustomerRepository {
  getCustomerById(id: string): Promise<Customer>;
  addCustomer(body: Customer): Promise<Customer>;
}
