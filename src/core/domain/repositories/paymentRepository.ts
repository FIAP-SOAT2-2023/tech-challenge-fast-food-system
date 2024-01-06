import { Payment } from "../entities/payment";

export interface IPaymentRepository {
  createPayment(body: Payment): Promise<Payment>;
}
