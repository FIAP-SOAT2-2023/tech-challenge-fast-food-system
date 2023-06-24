import { injectable, inject } from "tsyringe";
import { Customer } from "../../domain/customer";
import { ICustomerServicePortIn } from "../ports/in/iCustomerServicePortIn";
import { ICustomerRepository } from "../ports/out/customerRepository";
import CustomerModel from "../../../infra/models/customerModel";

@injectable()
export class CustomerService implements ICustomerServicePortIn {
  constructor(private readonly customerRepository: ICustomerRepository) {}
  getCustomerByDocument(document: string): Promise<CustomerModel> {
    return this.customerRepository.getCustomerByDocument(document);
  }
  addCustomer(body: Customer): Promise<CustomerModel> {
    return this.customerRepository.addCustomer(body);
  }
}
