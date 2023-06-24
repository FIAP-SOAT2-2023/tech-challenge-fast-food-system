import CustomerModel from "../../../../infra/models/customerModel";
import { Customer } from "../../../domain/customer";

export interface ICustomerServicePortIn {
  addCustomer(body: Customer): Promise<CustomerModel>;
  getCustomerById(id: string): Promise<CustomerModel>;
}
