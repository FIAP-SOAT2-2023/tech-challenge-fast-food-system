import CustomerModel from "../../../../infra/models/customerModel";
import { Customer } from "../../../domain/customer";

export interface ICustomerRepository {
  getCustomerById(id: string): Promise<CustomerModel>;
  addCustomer(body: Customer): Promise<CustomerModel>;
}
