import { IMercadoPagoProvider } from '../../infra/providers/mercadopago/MercadoPagoProvider';
import { Order } from "../../core/domain/entities/order";
export interface IPaymentExternalGateway {
    create(order: Order): Promise<string>;
}
export declare class PaymentExternalGateway implements IPaymentExternalGateway {
    private readonly mercadoPagoProvider;
    constructor(mercadoPagoProvider: IMercadoPagoProvider);
    create(order: Order): Promise<string>;
}
