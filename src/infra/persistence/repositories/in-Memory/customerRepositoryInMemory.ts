import { Customer } from "core/domain/entities/customer";

export class CustomerRepositoryInMemory {
  private customer: Customer[] = [];
  async addCustomer(body: Customer): Promise<Customer> {
    this.customer.push(body);
    return body;
  }
}
