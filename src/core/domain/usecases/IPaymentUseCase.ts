import { Payment } from "../entities/payment";

export interface IPaymentUseCase {
  getPaymentByOrderId(orderId: string): Promise<Payment>;
}
