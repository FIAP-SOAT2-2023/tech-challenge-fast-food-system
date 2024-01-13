"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MercadoPagoProviderImpl = void 0;
const MercadoPagoConfig_1 = __importDefault(require("./config/MercadoPagoConfig"));
;
class MercadoPagoProviderImpl {
    async createPayment(valor, identifier) {
        let preference = {
            external_reference: identifier,
            items: [
                {
                    title: 'Fast Food - Compras',
                    unit_price: valor,
                    quantity: 1,
                }
            ]
        };
        console.debug("preference: ", preference);
        try {
            const preferenceResult = await MercadoPagoConfig_1.default.preferences.create(preference);
            console.debug("preferenceResult: ", preferenceResult);
            const { response } = preferenceResult;
            return response.init_point;
        }
        catch (err) {
            console.error("Mercado Pago Provider Error: ", err);
            throw new Error();
        }
    }
}
exports.MercadoPagoProviderImpl = MercadoPagoProviderImpl;
//# sourceMappingURL=MercadoPagoProvider.js.map