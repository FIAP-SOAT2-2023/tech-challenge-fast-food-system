import { injectable, inject } from "tsyringe";
import { Customer } from "../../domain/customer";
import { ICustomerServicePortIn } from "../ports/in/iCustomerServicePortIn";
import { ICustomerRepository } from "../ports/out/customerRepository";

@injectable()
export class CustomerService implements ICustomerServicePortIn {
  constructor(private readonly customerRepository: ICustomerRepository) {}
  addCustomer(body: Customer): Promise<Customer> {
    return this.customerRepository.addCustomer(body);
  }
  getCustomerById(id: string): Promise<Customer> {
    return this.customerRepository.getCustomerById(id);
  }
}
