import { injectable } from "tsyringe";
import { ICustomerRepository } from "../../../core/applications/ports/out/customerRepository";
import { Customer } from "../../../core/domain/customer";
import CustomerModel from "../../../infra/models/customerModel";

@injectable()
export class CustomerRepository implements ICustomerRepository {
  getCustomerById(id: string): Promise<CustomerModel> {
    throw new Error("Method not implemented.");
  }
  async addCustomer(body: Customer): Promise<CustomerModel> {
    // 1 - Mapear modelo CustomerModel com o Address
    // 2 - Cria o usuario, recupera o id e cria o endereco com o id do customers
    const result = await CustomerModel.create({
      firstName: body.firstName,
      lastName: body.lastName,
      document: body.document,
      cellphone: body.cellphone,
      email: body.email,
    });
    return result;
  }
}