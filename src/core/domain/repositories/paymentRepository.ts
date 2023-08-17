import {Payment} from "core/domain/entities/payment";


export default interface IPaymentRepository {
  createPayment(paymentNew: Payment): Promise<Payment>
}