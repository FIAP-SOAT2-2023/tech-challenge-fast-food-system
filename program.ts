import "reflect-metadata";
import express from "express";
import sequelize from "./src/infra/database/connection";
import "./src/infra/config/mysqlConfig";
import { CustomerService } from "./src/core/applications/services/customerService";
import { CustomerRepository } from "./src/adapter/driven/infra/customerRepository";
import { CustomerController } from "./src/adapter/driver/customerController";
import { ProductRepository } from "./src/adapter/driven/infra/productRepository";
import { ProductService } from "./src/core/applications/services/productService";
import { ProductController } from "./src/adapter/driver/productController";
import { AddressRepository } from "./src/adapter/driven/infra/addressRepository";
import { AddressService } from "./src/core/applications/services/addressService";

const app = express();

app.use(express.json());

sequelize.sync();
const addressRepository = new AddressRepository();
const addressService = new AddressService(addressRepository);

const customerRepository = new CustomerRepository();
const customerService = new CustomerService(customerRepository);
const customerController = new CustomerController(
  customerService,
  addressService
);

const productRepository = new ProductRepository();
const productService = new ProductService(productRepository);
const productController = new ProductController(productService);

// Customers routes
app.post("/consumers", (req, resp) => {
  customerController.addCustomer(req, resp);
});

app.get("/consumers/:document", (req, resp) => {
  customerController.getCustomerByDocument(req, resp);
});

// Product routes
app.post("/products", (req, resp) => {
  productController.addProduct(req, resp);
});
app.get("/products/:id", (req, resp) => {
  productController.getProductById(req, resp);
});
app.get("/products", (req, resp) => {
  productController.getAllProduct(req, resp);
});
app.put("/products/:id", (req, resp) => {
  productController.putProductById(req, resp);
});
app.delete("/products/:id", (req, resp) => {
  productController.deleteProductById(req, resp);
});

app.listen(3000, () => console.log("Server is listening on port 3000"));
