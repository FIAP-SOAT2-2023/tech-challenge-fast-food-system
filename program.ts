import "reflect-metadata";
import express, { Request, Response } from "express";
import sequelize from "./src/infra/database/connection";
import "./src/infra/config/mysqlConfig";
import swaggerConfig from "./src/infra/docs/swagger";
import swaggerUiExpress from "swagger-ui-express";
import { CustomerService } from "./src/core/applications/services/customerService";
import { CustomerRepository } from "./src/adapter/driven/infra/customerRepository";
import { CustomerController } from "./src/adapter/driver/customerController";

const app = express();

//app.get('/users/:id', userController.getUserById.bind(userController));

sequelize.sync();

// Rota para a documentação do Swagger

//app.get('/docs', swaggerUiExpress.setup(swaggerConfig));

const customerRepository = new CustomerRepository();

const customerService = new CustomerService(customerRepository);
const customerController = new CustomerController(customerService);

//customerController.addCustomer.bind(customerController)
app.use(express.json());
app.post("/add", (req, resp) => {
  customerController.addCustomer(req, resp);
});

app.listen(3000, () => console.log("Server is listening on port 3000"));
