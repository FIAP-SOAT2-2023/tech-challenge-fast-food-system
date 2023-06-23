import { Customer } from "../../../domain/customer";

export interface ICustomerServicePortIn {
  addCustomer(body: Customer): Promise<Customer>;
  getCustomerById(id: string): Promise<Customer>;
}
