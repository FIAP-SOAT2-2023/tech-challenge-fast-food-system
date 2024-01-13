import { IPaymentUseCase } from "../../domain/usecases/IPaymentUseCase";
import IPaymentRepository from "../../domain/repositories/paymentRepository";
import { Payment } from "../../domain/entities/payment";
export declare class PaymentUseCase implements IPaymentUseCase {
    private readonly paymentRepository;
    constructor(paymentRepository: IPaymentRepository);
    getPaymentByOrderId(orderId: string): Promise<Payment>;
    updatePaymentStatusByNsu(body: Payment): Promise<Payment>;
}
