import { CustomerRepositoryInMemory } from "infra/persistence/repositories/in-Memory/customerRepositoryInMemory";

interface Customer {
  uuid?: string;
  firstName: string;
  lastName: string;
  document: string;
  email: string;
  cellphone: string;
}

export class CustomerInMemoryUseCase {
  private db: CustomerRepositoryInMemory;
  constructor(db: CustomerRepositoryInMemory) {
    this.db = db;
  }

  addCustomer(body: Customer): Promise<Customer> {
    return this.db.addCustomer(body);
  }
}
