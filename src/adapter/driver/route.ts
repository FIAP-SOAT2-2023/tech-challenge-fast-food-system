import { CustomerService } from "core/applications/services/customerService";
import express from "express";
import "infra/config/mysqlConfig";

import { CustomerRepository } from "adapter/driven/repositories/customerRepository";
import { CustomerController } from "adapter/driver/customerController";
import { ProductRepository } from "adapter/driven/repositories/productRepository";
import { ProductService } from "core/applications/services/productService";
import { ProductController } from "adapter/driver/productController";
import { AddressRepository } from "adapter/driven/repositories/addressRepository";
import { AddressService } from "core/applications/services/addressService";

export class Route {
  static Setup() {
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
    const app = express();
    app.use(express.json());

    // Customers routes
    app.post("/consumers", async (req, resp) => {
      await customerController.addCustomer(req, resp);
    });

    app.get("/consumers/:document", async (req, resp) => {
      await customerController.getCustomerByDocument(req, resp);
    });

    // Product routes
    app.post("/products", async (req, resp) => {
      await productController.addProduct(req, resp);
    });
    app.get("/products/:id", async (req, resp) => {
      await productController.getProductById(req, resp);
    });
    app.get("/products", async (req, resp) => {
      await productController.getAllProduct(req, resp);
    });
    app.put("/products/:id", async (req, resp) => {
      await productController.putProductById(req, resp);
    });
    app.delete("/products/:id", async (req, resp) => {
      await productController.deleteProductById(req, resp);
    });

    app.listen(3000, () => console.log("Server is listening on port 3000"));
  }
}
