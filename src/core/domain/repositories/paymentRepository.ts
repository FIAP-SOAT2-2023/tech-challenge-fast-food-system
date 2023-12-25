import { Payment } from "core/domain/entities/payment";

export default interface IPaymentRepository {
  getPaymentByOrderId(orderId: string): Promise<Payment>;
}
