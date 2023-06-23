import express from "express";
//import { UserController } from "./customerController";
import { CustomerService } from "../../core/applications/services/customerService";
import { CustomerController } from "./customerController";
import { CustomerRepository } from "../driven/infra/customerRepository";

//const userService = new CustomerService(userRepository);
//const userController = new UserController(userService);

const customerRepository = new CustomerRepository();

const customerService = new CustomerService(customerRepository);
const customerController = new CustomerController(customerService);

const app = express();
//customerController.addCustomer.bind(customerController)
app.post("/add", (req, resp) => {
  customerController.addCustomer(req, resp);
});
app.listen(3000, () => console.log("Server is listening on port 3000"));
