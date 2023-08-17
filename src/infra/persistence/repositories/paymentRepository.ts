import { Payment } from "core/domain/entities/payment";
import IPaymentRepository from "core/domain/repositories/paymentRepository";
import PaymentModel from "infra/persistence/models/paymentModel";

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