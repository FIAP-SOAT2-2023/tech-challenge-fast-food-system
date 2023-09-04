import CustomerModel from "infra/persistence/models/customerModel";
import { injectable } from "tsyringe";
import { CustomerMap } from "framework/mapper/customerMap";
import { ICustomerRepository } from "core/domain/repositories/customerRepository";
import { Customer, isValidCPF } from "core/domain/entities/customer";

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

  async addCustomer(body: Customer): Promise<Customer> {
    if (!isValidCPF(body.document)) {
      throw new Error("Documento inválido!");
    }
    let customer = await CustomerModel.create({
      ...body,
    });

    return CustomerMap.ConvertSimple(customer) as Customer;

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
