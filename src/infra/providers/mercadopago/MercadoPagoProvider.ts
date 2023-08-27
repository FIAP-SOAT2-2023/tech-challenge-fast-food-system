import mercadopago from "./config/MercadoPagoConfig";

export interface IMercadoPagoProvider {

    createPayment(valor:number, identifier: string ): Promise<string>
    
};


export class MercadoPagoProviderImpl implements IMercadoPagoProvider {

    
    public async createPayment(valor:number, identifier: string ): Promise<string> {

        // Crie um objeto de preferência
        let preference = {
            external_reference: identifier,
            items: [
            {
                title: 'Fast Food - Compras',
                unit_price: valor,
                quantity: 1,
            }
            ]
        }

        console.debug("preference: ", preference)

        try {
            const preferenceResult = await mercadopago.preferences.create(preference);
            //return res.redirect(`${preferenceResult.body.init_point}`);
            console.debug("preferenceResult: ", preferenceResult)

            const { response } = preferenceResult

            return response.init_point;
          } catch (err) {
            console.error("Mercado Pago Provider Error: ", err)
            throw new Error()
          }




    }

}