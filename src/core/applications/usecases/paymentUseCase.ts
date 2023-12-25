import { Payment } from "core/domain/entities/payment";
import IPaymentRepository from "core/domain/repositories/paymentRepository";
import { IPaymentUseCase } from "core/domain/usecases/IPaymentUseCase";

export class PaymentUseCase implements IPaymentUseCase {
  constructor(private readonly paymentRepository: IPaymentRepository) {}

  getPaymentByOrderId(orderId: string): Promise<Payment> {
    return this.paymentRepository.getPaymentByOrderId(orderId);
  }
}
