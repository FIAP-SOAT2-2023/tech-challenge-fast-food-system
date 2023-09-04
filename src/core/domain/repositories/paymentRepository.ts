import {Payment} from "core/domain/entities/payment";

export default interface IPaymentRepository {
  createPayment(paymentNew: Payment): Promise<Payment>
  updatePaymentStatusByNsu(body: Payment): Promise<Payment>
  getPaymentByOrderId(orderId: string): Promise<Payment>
}