const { randomUUID } = require("crypto"); // Added in: node v14.17.0
export class MockCustomer {
  static body = {
    firstName: "Elir",
    lastName: "Ribeiro",
    document: "976.705.100-72",
    email: "elirweb@gmail.com",
    cellphone: "11 56235498",
    uuid: randomUUID(),
  };
}
