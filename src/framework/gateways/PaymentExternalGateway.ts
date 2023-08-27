import { Basket } from 'core/domain/entities/basket';
import { IMercadoPagoProvider } from '../../infra/providers/mercadopago/MercadoPagoProvider';
import { Order } from "core/domain/entities/order";

export interface IPaymentExternalGateway {

    create(order:Order ): Promise<string>

}

export class PaymentExternalGateway implements IPaymentExternalGateway {

    private readonly mercadoPagoProvider: IMercadoPagoProvider

    constructor(mercadoPagoProvider: IMercadoPagoProvider) {
        this.mercadoPagoProvider = mercadoPagoProvider;
    }

    public async create(order:Order ): Promise<string> {

        const { basket }  = order

        const totalValue = basket?.totalPrice || 0

        const paymentId = basket?.paymentId || ""

        return await this.mercadoPagoProvider.createPayment(totalValue, paymentId)


    }



}