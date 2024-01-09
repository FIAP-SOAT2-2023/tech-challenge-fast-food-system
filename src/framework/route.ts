import express, { Request, Response, NextFunction } from "express";
import "infra/persistence/config/mysqlConfig";

import swaggerUi from "swagger-ui-express";
import swaggerDocs from "infra/docs/swagger";
import { BasketRepository } from "infra/persistence/repositories/basketRepository";

import { OrderRepository } from "infra/persistence/repositories/orderRepository";
import { IOrderRepository } from "core/domain/repositories/orderRepository";
import { BasketUseCase } from "core/applications/usecases/basketUseCase";
import { BasketController } from "./controllers/basketController";
import { OrderStatusRepository } from "infra/persistence/repositories/orderStatusRepository";
import { OrderStatusUseCase } from "core/applications/usecases/orderStatusUseCase";
import { OrderStatusController } from "./controllers/orderStatusController";
import { OrderUseCase } from "core/applications/usecases/orderUseCase";
import { OrderController } from "./controllers/orderController";
import { CustomerRepository } from "infra/persistence/repositories/customerRepository";
import { ProductRepository } from "infra/persistence/repositories/productRepository";
import { PaymentRepository } from "infra/persistence/repositories/paymentRepository";

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
    const basketRepository: BasketRepository = new BasketRepository();

    const orderRepository: IOrderRepository = new OrderRepository();
    const orderStatusRepository = new OrderStatusRepository();
    const customerRepository = new CustomerRepository();
    const productRepository = new ProductRepository();
    const paymentRepository = new PaymentRepository();

    const basketService = new BasketUseCase(
      basketRepository,
      orderRepository,
      orderStatusRepository,
      customerRepository,
      productRepository,
      paymentRepository
    );
    const basketController = new BasketController(basketService);

    const orderStatusUseCase = new OrderStatusUseCase(orderStatusRepository);
    const orderStatusController = new OrderStatusController(orderStatusUseCase);

    const orderUseCase = new OrderUseCase(orderRepository);
    const orderController = new OrderController(orderUseCase);

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

    app.post("/orders", async (req, resp, next) => {
      await Route.asyncWrapper(
        req,
        resp,
        next,
        basketController.create.bind(basketController)
      );
    });
    app.get("/orders/pending", async (req, resp, next) => {
      await Route.asyncWrapper(
        req,
        resp,
        next,
        basketController.getAllPendingOrders.bind(basketController)
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

    app.listen(3000, () =>
      console.log(
        "Server is listening on port 3000 \n SWAGGER: http://localhost:3000/docs"
      )
    );
  }
}
