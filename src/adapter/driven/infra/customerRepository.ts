import { injectable } from "tsyringe";
import { ICustomerRepository } from "../../../core/applications/ports/out/customerRepository";
import { Customer } from "../../../core/domain/customer";
import CustomerModel from "../../../infra/models/customerModel";
import customerModel from "../../../infra/models/customerModel";

@injectable()
export class CustomerRepository implements ICustomerRepository {
  getCustomerById(id: string): Promise<Customer> {
    throw new Error("Method not implemented.");
  }
  async addCustomer(body: Customer): Promise<Customer> {
    let model = new CustomerModel();
    model.firstName = body.firtsName;
    model.lastName = body.lastName;
    model.document = body.document;
    model.cellphone = body.cellphone;
    model.email = body.email;

    let result = await customerModel.create(model);
    body.id = result.uuid;
    return body;
  }
}
