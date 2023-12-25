import { Payment } from "core/domain/entities/payment";
import IPaymentRepository from "core/domain/repositories/paymentRepository";

import { Op } from "sequelize";

export class PaymentRepository implements IPaymentRepository {
  getPaymentByOrderId(orderId: string): Promise<Payment> {
    throw new Error("ir no microserviço de paamento");
  }
  /*
    async getPaymentByOrderId(orderId: string): Promise<Payment> {
        return new Promise<Payment> (async  (resolve, reject) =>  {            
            
            const paymentModel = await PaymentModel.findOne({
                where: {
                    [Op.or]: [
                        { uuid: orderId },
                        { nsu: orderId }
                    ]                  
                },
            });            

            if (paymentModel == null) {

                reject(new Error("pagamento não cadastrado"))
        
                return
            }

            const { ...paymentValues } = paymentModel?.dataValues;

            const paymentResult: Payment = {
                ...paymentValues
            }            

            resolve(paymentResult)
        })
    }
*/
}
