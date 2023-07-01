import CustomerModel from 'infra/models/customerModel';
import { injectable } from 'tsyringe';
import { ICustomerRepository } from 'core/applications/ports/out/customerRepository';
import { Customer } from 'core/domain/customer';
import { resolve } from 'path';

@injectable()
export class CustomerRepository implements ICustomerRepository {
  
  async findByUUID(customerId: string): Promise<Customer> {

    return new Promise<Customer>( async (resolve, reject) => {
      const customerModel = await CustomerModel.findOne({
        where: {
          uuid: customerId,
        },
      });
      

      if (customerModel == null) {

        reject(new Error("Usuario não cadastrado"))

        return
    }


      const { ...customerValues } = customerModel?.dataValues;

      const customerResult: Customer = {
        ...customerValues
      }


      resolve(customerResult)
    })
  
  }


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
