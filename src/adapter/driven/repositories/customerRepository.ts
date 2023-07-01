import CustomerModel from "infra/models/customerModel";
import { injectable } from "tsyringe";
import { ICustomerRepository } from "core/applications/ports/out/customerRepository";
import { Customer, isValidCPF } from "core/domain/customer";
import { CustomerMap } from "adapter/mapper/customerMap";

@injectable()
export class CustomerRepository implements ICustomerRepository {
 
  async getCustomerByDocument(document: string): Promise<Customer> {
    let message: string = "";
    let partialCustomer: Partial<Customer> = {};
    const customer = await CustomerModel.findOne({
      where: {
        document: document,
      },
    });
    if (!isValidCPF(document)) {
      message = "Documento inválido!";
    }
    if (!customer) {
      partialCustomer = CustomerMap.Convert(message, undefined);
    } else {
      partialCustomer = CustomerMap.Convert(message, customer);
    }

    return partialCustomer as Customer;
  }
  async addCustomer(body: Customer): Promise<CustomerModel> {
    if (!isValidCPF(body.document)) {
      throw new Error("Documento inválido!");
    }
    let result = await CustomerModel.create({
      ...body,
    });

    return result;
  }

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

}
