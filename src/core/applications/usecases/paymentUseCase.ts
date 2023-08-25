
import { Payment } from 'core/domain/entities/payment';
import IPaymentRepository from 'core/domain/repositories/paymentRepository';
import { IPaymentUseCase } from 'core/domain/usecases/IPaymentUseCase';

export class PaymentUseCase implements IPaymentUseCase {
  constructor(private readonly paymentRepository: IPaymentRepository) {}
 
  updatePaymentStatusByNsu(body: Payment): Promise<Payment> {
    return this.paymentRepository.updatePaymentStatusByNsu(body);
  }
}
