"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mercadopago = require('mercadopago');
mercadopago.configure({
    sandbox: process.env.SANDBOX == 'true',
    access_token: process.env.MP_ACCESS_TOKEN
});
exports.default = mercadopago;
//# sourceMappingURL=MercadoPagoConfig.js.map