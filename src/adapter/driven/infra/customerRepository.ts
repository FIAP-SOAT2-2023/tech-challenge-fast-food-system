import { injectable } from "tsyringe";
import { ICustomerRepository } from "../../../core/applications/ports/out/customerRepository";
import { Customer } from "../../../core/domain/customer";
import CustomerModel from "../../../infra/models/customerModel";

@injectable()
export class CustomerRepository implements ICustomerRepository {
  async getCustomerByDocument(document: string): Promise<CustomerModel> {
    const customer = await CustomerModel.findOne({
      where: {
        document: document,
      },
    });

    if (!customer) {
      throw new Error("Cliente não encontrado");
    }

    return customer!;
  }
  async addCustomer(body: Customer): Promise<CustomerModel> {
    let result = await CustomerModel.create({
      ...body,
    });

    return result;
  }
}
