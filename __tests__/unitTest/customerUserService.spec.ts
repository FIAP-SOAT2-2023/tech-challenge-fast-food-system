import { CustomerInMemoryUseCase } from "core/applications/in-Memory/customerInMemoryUseCase";
import { Customer } from "core/domain/entities/customer";
import { CustomerRepositoryInMemory } from "infra/persistence/repositories/in-Memory/customerRepositoryInMemory";
import { MockCustomer } from "../../src/core/applications/in-Memory/Mock/customer";
const { randomUUID } = require("crypto"); // Added in: node v14.17.0

describe("Create customer", () => {
  let body: Customer;
  beforeEach(() => {
    jest.clearAllMocks();
    body = MockCustomer.body;
  });
  it("should to able to customer", async () => {
    const customerRepositoryInMemory = (
      CustomerRepositoryInMemory as jest.MockedClass<
        typeof CustomerRepositoryInMemory
      >
    ).mockImplementation();

    const inMemoryDB = new customerRepositoryInMemory();

    const customerService = new CustomerInMemoryUseCase(inMemoryDB);
    customerService.addCustomer(body);
    expect(customerService.addCustomer).toHaveBeenCalledWith(body);
  });
});
