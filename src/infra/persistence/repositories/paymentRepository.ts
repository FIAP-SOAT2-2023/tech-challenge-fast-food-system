import { Payment } from "core/domain/entities/payment";
import IPaymentRepository from "core/domain/repositories/paymentRepository";
import PaymentModel from "infra/persistence/models/paymentModel";
import { Op } from "sequelize";

export class PaymentRepository implements IPaymentRepository {
    
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

    async updatePaymentStatusByNsu(body: Payment): Promise<Payment> {
        
        return new Promise<Payment> (async  (resolve ) => {
        
            const payment = await PaymentModel.findOne({
                where: {
                    nsu: body.nsu
                }
            });

            if (!payment) {
                throw new Error('Nsu não encontrado.');
            }

            const paymentUpddated = await payment.update({
                status: body.status,
                paidAt: new Date()
            })

            resolve({
                nsu: paymentUpddated.nsu,
                status: paymentUpddated.status
            })
        })
    }
}