import { Payment } from "core/domain/payment";


export default interface IPaymentRepository {
    
    createPayment(paymentNew: Payment): Promise<Payment>
}