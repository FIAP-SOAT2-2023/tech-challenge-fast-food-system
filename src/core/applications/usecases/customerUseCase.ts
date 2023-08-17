import { Customer } from "core/domain/entities/customer";
import { ICustomerRepository } from "core/domain/repositories/customerRepository";
import { ICustomerUseCase } from "core/domain/usecases/iCustomerUseCase";

export class CustomerUseCase implements ICustomerUseCase {

  constructor(private readonly customerRepository: ICustomerRepository) {}
  
  getCustomerByDocument(document: string): Promise<Customer> {
    return this.customerRepository.getCustomerByDocument(document);
  }

  addCustomer(body: Customer): Promise<Customer> {
    return this.customerRepository.addCustomer(body);
  }
}
