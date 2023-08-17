import { Payment } from "core/domain/entities/payment";
import { Length, IsDate, IsNotEmpty } from 'class-validator';

export class PaymentRequest implements Payment {
    @Length(2, 100, {message: 'QrCode should be between 2 and 100 characters'})
    @IsNotEmpty({message: 'QrCode is required'})
    qrCode?: string;

    @Length(2, 100, {message: 'NSU should be between 2 and 100 characters'})
    @IsNotEmpty({message: 'NSU is required'})
    nsu?: string;

    @IsNotEmpty({message: 'Status is required'})
    status?: string;

    @IsDate()
    @IsNotEmpty({message: 'PaidAT is required'})
    paidAt?: Date;

    @Length(2, 10, {message: 'TotalPrice should be between 2 and 10 characters'})
    @IsNotEmpty({message: 'TotalPrice is required'})
    totalPrice?: number;
}
