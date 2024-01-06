import { Payment } from "core/domain/entities/Payment";
import { IPaymentRepository } from "core/domain/repositories/paymentRepository";

export class PaymentRepository implements IPaymentRepository {
  createPayment(data: Payment): Promise<Payment> {
    return new Promise<Payment>(async (resolve, reject) => {
      fetch(`http:localhost:3000/payment`, {
        method: "POST",
        body: JSON.stringify({ data }),
      })
        .then(function (response) {
          resolve(response.json());
        })
        .catch((err) => reject(err));
    });
  }
}
