import { Customer } from "../entities/customer";

export interface ICustomerRepository {
  getCustomerIdByDocument(document: string): Promise<Customer>;
}
