import IPaymentRepository from "../../../core/domain/repositories/paymentRepository";
import { Payment } from "../../../core/domain/entities/payment";
export declare class PaymentRepository implements IPaymentRepository {
    getPaymentByOrderId(orderId: string): Promise<Payment>;
    createPayment(paymentNew: Payment): Promise<Payment>;
    updatePaymentStatusByNsu(body: Payment): Promise<Payment>;
}
