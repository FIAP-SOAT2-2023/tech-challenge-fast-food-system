"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Route = void 0;
const PaymentExternalGateway_1 = require("./gateways/PaymentExternalGateway");
const express_1 = __importDefault(require("express"));
require("../infra/persistence/config/mysqlConfig");
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const swagger_1 = __importDefault(require("./../infra/docs/swagger"));
const orderController_1 = require("./controllers/orderController");
const paymentController_1 = require("./controllers/paymentController");
const addressRepository_1 = require("../infra/persistence/repositories/addressRepository");
const addressUseCase_1 = require("../core/applications/usecases/addressUseCase");
const customerRepository_1 = require("../infra/persistence/repositories/customerRepository");
const customerUseCase_1 = require("../core/applications/usecases/customerUseCase");
const customerController_1 = require("./controllers/customerController");
const productRepository_1 = require("../infra/persistence/repositories/productRepository");
const productUseCase_1 = require("../core/applications/usecases/productUseCase");
const productController_1 = require("./controllers/productController");
const basketRepository_1 = require("../infra/persistence/repositories/basketRepository");
const orderStatusRepository_1 = require("../infra/persistence/repositories/orderStatusRepository");
const basketUseCase_1 = require("../core/applications/usecases/basketUseCase");
const basketController_1 = require("./controllers/basketController");
const orderStatusUseCase_1 = require("../core/applications/usecases/orderStatusUseCase");
const orderStatusController_1 = require("./controllers/orderStatusController");
const orderUseCase_1 = require("../core/applications/usecases/orderUseCase");
const paymentRepository_1 = require("../infra/persistence/repositories/paymentRepository");
const orderRepository_1 = require("../infra/persistence/repositories/orderRepository");
const MercadoPagoProvider_1 = require("../infra/providers/mercadopago/MercadoPagoProvider");
const paymentUseCase_1 = require("../core/applications/usecases/paymentUseCase");
class Route {
    static async asyncWrapper(req, res, next, fn) {
        try {
            await fn(req, res, next);
        }
        catch (error) {
            console.error("Error:", error);
            if (res.headersSent) {
                return;
            }
            const errorValue = error;
            const { message } = errorValue;
            if (message) {
                res.status(400).json({ error: [message] });
            }
            else {
                res.status(500).json({ error: ["Internal Server Error"] });
            }
        }
    }
    static Setup() {
        const addressRepository = new addressRepository_1.AddressRepository();
        const addressUseCase = new addressUseCase_1.AddressUseCase(addressRepository);
        const customerRepository = new customerRepository_1.CustomerRepository();
        const customerUseCase = new customerUseCase_1.CustomerUseCase(customerRepository);
        const customerController = new customerController_1.CustomerController(customerUseCase, addressUseCase);
        const productRepository = new productRepository_1.ProductRepository();
        const productUseCase = new productUseCase_1.ProductUseCase(productRepository);
        const productController = new productController_1.ProductController(productUseCase);
        const basketRepository = new basketRepository_1.BasketRepository();
        const paymentRepository = new paymentRepository_1.PaymentRepository();
        const orderRepository = new orderRepository_1.OrderRepository();
        const orderStatusRepository = new orderStatusRepository_1.OrderStatusRepository();
        const mercadoPagoProvider = new MercadoPagoProvider_1.MercadoPagoProviderImpl();
        const paymentExternalGateway = new PaymentExternalGateway_1.PaymentExternalGateway(mercadoPagoProvider);
        const basketService = new basketUseCase_1.BasketUseCase(basketRepository, paymentRepository, orderRepository, customerRepository, orderStatusRepository, paymentExternalGateway);
        const basketController = new basketController_1.BasketController(basketService);
        const orderStatusUseCase = new orderStatusUseCase_1.OrderStatusUseCase(orderStatusRepository);
        const orderStatusController = new orderStatusController_1.OrderStatusController(orderStatusUseCase);
        const orderUseCase = new orderUseCase_1.OrderUseCase(orderRepository);
        const orderController = new orderController_1.OrderController(orderUseCase);
        const paymentUseCase = new paymentUseCase_1.PaymentUseCase(paymentRepository);
        const paymentController = new paymentController_1.PaymentController(paymentUseCase);
        const app = (0, express_1.default)();
        app.use(express_1.default.json());
        app.use("/docs", swagger_ui_express_1.default.serve);
        app.get("/docs", swagger_ui_express_1.default.setup(swagger_1.default));
        app.use((err, req, res, next) => {
            console.error("Error:", err);
            if (!res.headersSent) {
                res.status(500).json({ error: "Internal server error" });
            }
        });
        app.post("/customers", async (req, resp, next) => {
            await Route.asyncWrapper(req, resp, next, customerController.addCustomer.bind(customerController));
        });
        app.get("/customers/:document", async (req, resp, next) => {
            await Route.asyncWrapper(req, resp, next, customerController.getCustomerByDocument.bind(customerController));
        });
        app.get("/customers/mail/:mail", async (req, resp, next) => {
            await Route.asyncWrapper(req, resp, next, customerController.getCustomerByEmail.bind(customerController));
        });
        app.post("/products", async (req, resp, next) => {
            await Route.asyncWrapper(req, resp, next, productController.addProduct.bind(productController));
        });
        app.get("/products/:id", async (req, resp, next) => {
            await Route.asyncWrapper(req, resp, next, productController.getProductById.bind(productController));
        });
        app.get("/products", async (req, resp, next) => {
            await Route.asyncWrapper(req, resp, next, productController.getAllProduct.bind(productController));
        });
        app.put("/products/:id", async (req, resp, next) => {
            await Route.asyncWrapper(req, resp, next, productController.putProductById.bind(productController));
        });
        app.delete("/products/:id", async (req, resp, next) => {
            await Route.asyncWrapper(req, resp, next, productController.deleteProductById.bind(productController));
        });
        app.post("/checkout", async (req, resp, next) => {
            await Route.asyncWrapper(req, resp, next, basketController.create.bind(basketController));
        });
        app.get("/checkout/pending", async (req, resp, next) => {
            await Route.asyncWrapper(req, resp, next, basketController.getAllPendingOrders.bind(basketController));
        });
        app.get("/orders/status", async (req, resp, next) => {
            await Route.asyncWrapper(req, resp, next, orderStatusController.getAllOrderStatus.bind(orderStatusController));
        });
        app.post("/orders/status", async (req, resp, next) => {
            await Route.asyncWrapper(req, resp, next, orderStatusController.addOrderStatus.bind(orderStatusController));
        });
        app.patch("/orders/:id", async (req, resp, next) => {
            await Route.asyncWrapper(req, resp, next, orderController.updateOrderById.bind(orderController));
        });
        app.post("/payment/webhook-notification", async (req, resp, next) => {
            await Route.asyncWrapper(req, resp, next, paymentController.updatePaymentStatusByNsu.bind(paymentController));
        });
        app.get("/payment/:orderId", async (req, resp, next) => {
            await Route.asyncWrapper(req, resp, next, paymentController.getPaymentByOrderId.bind(paymentController));
        });
        app.listen(3000, () => console.log("Server is listening on port 3000 \n SWAGGER: http://localhost:3000/docs"));
    }
}
exports.Route = Route;
//# sourceMappingURL=route.js.map