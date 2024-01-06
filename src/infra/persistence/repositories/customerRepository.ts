import { ICustmerRepository } from "core/domain/repositories/CustomerRepository";
const axios = require("axios");
export class CustmerRepository implements ICustmerRepository {
  getCustomerById(): Promise<string> {
    return new Promise<string>(async (resolve) => {
      let response = axios.get("https://localhost:300/customer");
      return resolve(response.customerId);
    });
  }
}
