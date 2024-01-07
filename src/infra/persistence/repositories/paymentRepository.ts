import { Payment } from "core/domain/entities/payment";
import { IPaymentRepository } from "core/domain/repositories/paymentRepository";

export class PaymentRepository implements IPaymentRepository {
  createPayment(data: Payment): Promise<Payment> {
    data = { ...data, paymentId: Math.random() * 4564 };
    const apiUrl = "http://localhost:320/payment/";
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };

    return new Promise<Payment>(async (resolve, reject) => {
      await fetch(apiUrl, requestOptions)
        .then((response) => {
          if (!response.ok) {
            throw new Error(`Erro na solicitação: ${response.statusText}`);
          }

          return response.json();
        })
        .then((data) => {
          console.log("Dados da resposta:", data);
          resolve(data);
        })
        .catch((error) => {
          console.error("Erro na solicitação:", error);
          reject(error);
        });
    });
  }
}
