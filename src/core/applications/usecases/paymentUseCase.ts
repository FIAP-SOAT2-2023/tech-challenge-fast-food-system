import {IPaymentUseCase} from "../../domain/usecases/IPaymentUseCase";
import IPaymentRepository from "../../domain/repositories/paymentRepository";
import {Payment} from "../../domain/entities/payment";

export class PaymentUseCase implements IPaymentUseCase {
  
  constructor(private readonly paymentRepository: IPaymentRepository) {}
  
  getPaymentByOrderId(orderId: string): Promise<Payment> {
    return this.paymentRepository.getPaymentByOrderId(orderId);
  }
 
  updatePaymentStatusByNsu(body: Payment): Promise<Payment> {
    return this.paymentRepository.updatePaymentStatusByNsu(body);
  }
}
