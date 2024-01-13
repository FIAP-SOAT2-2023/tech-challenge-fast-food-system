export interface IMercadoPagoProvider {
    createPayment(valor: number, identifier: string): Promise<string>;
}
export declare class MercadoPagoProviderImpl implements IMercadoPagoProvider {
    createPayment(valor: number, identifier: string): Promise<string>;
}
