import { Payment } from "../../core/domain/entities/payment";
export declare class PaymentRequest implements Payment {
    qrCode?: string;
    nsu?: string;
    status?: string;
    paidAt?: Date;
    totalPrice?: number;
}
