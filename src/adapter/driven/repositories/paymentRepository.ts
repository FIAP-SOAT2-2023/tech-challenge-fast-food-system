import IPaymentRepository from "core/applications/ports/out/paymentRepository";
import { Payment } from "core/domain/payment";
import PaymentModel from "infra/models/paymentModel";

export class PaymentRepository implements IPaymentRepository {

    async createPayment(paymentNew: Payment): Promise<Payment> {

        return new Promise<Payment> (async  (resolve ) =>  {
            
            let paymentCreated: PaymentModel = await PaymentModel.create(paymentNew);

            const {id:idPayment, createdAt, updatedAt, ...paymentValues} =  paymentCreated.dataValues
    
            const payment: Payment = {
                ...paymentValues
            }

            resolve(payment)
        })
    }
}