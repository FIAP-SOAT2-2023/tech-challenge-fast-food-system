import { Payment } from "../entities/payment";


export interface IPaymentUseCase {

    updatePaymentStatusByNsu(body: Payment): Promise<Payment>

    getPaymentByOrderId(orderId: string): Promise<Payment>

}
