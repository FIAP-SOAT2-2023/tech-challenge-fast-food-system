import { Customer } from "core/domain/entities/customer";
import { ICustomerRepository } from "core/domain/repositories/customerRepository";

//const axios = require("axios");
export class CustomerRepository implements ICustomerRepository {
  getCustomerIdByDocument(document: string): Promise<Customer> {
    return new Promise<Customer>(async (resolve, reject) => {
      fetch(`http:localhost:320/customer?document=${document}`)
        .then(function (response) {
          resolve(response.json());
        })
        .catch((err) => reject(err));
    });
  }
}
