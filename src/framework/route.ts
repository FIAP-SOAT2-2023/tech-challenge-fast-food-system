import { Payment } from "core/domain/entities/payment";
import {
  IPaymentExternalGateway,
  PaymentExternalGateway,
} from "./gateways/PaymentExternalGateway";

import express, { Request, Response, NextFunction } from "express";
import "infra/persistence/config/mysqlConfig";

import swaggerUi from "swagger-ui-express";
import swaggerDocs from "infra/docs/swagger";
import { AddressUseCase } from "core/applications/usecases/addressUseCase";
import { CustomerRepository } from "infra/persistence/repositories/customerRepository";
import { CustomerUseCase } from "core/applications/usecases/customerUseCase";
import { CustomerController } from "./controllers/customerController";
import { ProductRepository } from "infra/persistence/repositories/productRepository";
import { ProductUseCase } from "core/applications/usecases/productUseCase";
import { ProductController } from "./controllers/productController";
import { BasketRepository } from "infra/persistence/repositories/basketRepository";
import { PaymentRepository } from "infra/persistence/repositories/paymentRepository";
import { OrderRepository } from "infra/persistence/repositories/orderRepository";
import IPaymentRepository from "core/domain/repositories/paymentRepository";
import { IOrderRepository } from "core/domain/repositories/orderRepository";
import { BasketUseCase } from "core/applications/usecases/basketUseCase";
import { AddressRepository } from "infra/persistence/repositories/addressRepository";
import { BasketController } from "./controllers/basketController";
import { OrderStatusRepository } from "infra/persistence/repositories/orderStatusRepository";
import { OrderStatusUseCase } from "core/applications/usecases/orderStatusUseCase";
import { OrderStatusController } from "./controllers/orderStatusController";
import { OrderUseCase } from "core/applications/usecases/orderUseCase";
import { OrderController } from "./controllers/orderController";
import { PaymentUseCase } from "core/applications/usecases/paymentUseCase";
import { PaymentController } from "./controllers/paymentController";
import {
  IMercadoPagoProvider,
  MercadoPagoProviderImpl,
} from "infra/providers/mercadopago/MercadoPagoProvider";

export interface Error {
  message?: string;
}
export class Route {
  static async asyncWrapper(
    req: Request,
    res: Response,
    next: NextFunction,
    fn: (req: Request, res: Response, next: NextFunction) => Promise<void>
  ): Promise<void> {
    try {
      await fn(req, res, next);
    } catch (error) {
      console.error("Error:", error);
      if (res.headersSent) {
        return;
      }

      const errorValue = error as Error;
      const { message } = errorValue;

      if (message) {
        res.status(400).json({ error: [message] });
      } else {
        res.status(500).json({ error: ["Internal Server Error"] });
      }
    }
  }

  static Setup() {
    const addressRepository = new AddressRepository();
    const addressUseCase = new AddressUseCase(addressRepository);

    const customerRepository = new CustomerRepository();
    const customerUseCase = new CustomerUseCase(customerRepository);
    const customerController = new CustomerController(
      customerUseCase,
      addressUseCase
    );

    const productRepository = new ProductRepository();
    const productUseCase = new ProductUseCase(productRepository);
    const productController = new ProductController(productUseCase);

    const basketRepository: BasketRepository = new BasketRepository();
    const paymentRepository: IPaymentRepository = new PaymentRepository();
    const orderRepository: IOrderRepository = new OrderRepository();
    const orderStatusRepository = new OrderStatusRepository();

    const mercadoPagoProvider: IMercadoPagoProvider =
      new MercadoPagoProviderImpl();
    const paymentExternalGateway: IPaymentExternalGateway =
      new PaymentExternalGateway(mercadoPagoProvider);

    const basketService = new BasketUseCase(
      basketRepository,
      paymentRepository,
      orderRepository,
      customerRepository,
      orderStatusRepository,
      paymentExternalGateway
    );
    const basketController = new BasketController(basketService);

    const orderStatusUseCase = new OrderStatusUseCase(orderStatusRepository);
    const orderStatusController = new OrderStatusController(orderStatusUseCase);

    const orderUseCase = new OrderUseCase(orderRepository);
    const orderController = new OrderController(orderUseCase);

    const paymentUseCase = new PaymentUseCase(paymentRepository);
    const paymentController = new PaymentController(paymentUseCase);

    const app = express();
    app.use(express.json());

    app.use("/docs", swaggerUi.serve);
    app.get("/docs", swaggerUi.setup(swaggerDocs));

    app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
      console.error("Error:", err);
      if (!res.headersSent) {
        res.status(500).json({ error: "Internal server error" });
      }
    });

    app.post("/customers", async (req, resp, next) => {
      await Route.asyncWrapper(
        req,
        resp,
        next,
        customerController.addCustomer.bind(customerController)
      );
    });
    app.get("/customers/:document", async (req, resp, next) => {
      await Route.asyncWrapper(
        req,
        resp,
        next,
        customerController.getCustomerByDocument.bind(customerController)
      );
    });
    app.post("/products", async (req, resp, next) => {
      await Route.asyncWrapper(
        req,
        resp,
        next,
        productController.addProduct.bind(productController)
      );
    });
    app.get("/products/:id", async (req, resp, next) => {
      await Route.asyncWrapper(
        req,
        resp,
        next,
        productController.getProductById.bind(productController)
      );
    });
    app.get("/products", async (req, resp, next) => {
      await Route.asyncWrapper(
        req,
        resp,
        next,
        productController.getAllProduct.bind(productController)
      );
    });
    app.put("/products/:id", async (req, resp, next) => {
      await Route.asyncWrapper(
        req,
        resp,
        next,
        productController.putProductById.bind(productController)
      );
    });
    app.delete("/products/:id", async (req, resp, next) => {
      await Route.asyncWrapper(
        req,
        resp,
        next,
        productController.deleteProductById.bind(productController)
      );
    });
    app.post("/checkout", async (req, resp, next) => {
      await Route.asyncWrapper(
        req,
        resp,
        next,
        basketController.create.bind(basketController)
      );
    });
    app.get("/checkout/pending", async (req, resp, next) => {
      await Route.asyncWrapper(
        req,
        resp,
        next,
        basketController.getAllPendingOrders.bind(basketController)
      );
    });
    app.get("/orders/status", async (req, resp, next) => {
      await Route.asyncWrapper(
        req,
        resp,
        next,
        orderStatusController.getAllOrderStatus.bind(orderStatusController)
      );
    });
    app.post("/orders/status", async (req, resp, next) => {
      await Route.asyncWrapper(
        req,
        resp,
        next,
        orderStatusController.addOrderStatus.bind(orderStatusController)
      );
    });
    app.patch("/orders/:id", async (req, resp, next) => {
      await Route.asyncWrapper(
        req,
        resp,
        next,
        orderController.updateOrderById.bind(orderController)
      );
    });
    app.post("/payment/webhook-notification", async (req, resp, next) => {
      await Route.asyncWrapper(
        req,
        resp,
        next,
        paymentController.updatePaymentStatusByNsu.bind(paymentController)
      );
    });
    app.get("/payment/:orderId", async (req, resp, next) => {
      await Route.asyncWrapper(
        req,
        resp,
        next,
        paymentController.getPaymentByOrderId.bind(paymentController)
      );
    });

    app.listen(3000, () =>
      console.log(
        "Server is listening on port 3000 \n SWAGGER: http://localhost:3000/docs"
      )
    );
  }
}
