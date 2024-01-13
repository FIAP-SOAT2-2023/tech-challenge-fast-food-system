import { Length, IsNotEmpty, IsNumber } from 'class-validator';
import {OrderStatus} from "../../core/domain/entities/orderStatus";

export class OrderStatusRequest implements OrderStatus {
    declare id: string;

    @Length(2, 50, {message: 'Key should be between 2 and 50 characters'})
    @IsNotEmpty({message: 'Key is required'})
    declare key: string;

    @Length(2, 50, {message: 'Name should be between 2 and 50 characters'})
    @IsNotEmpty({message: 'Name is required'})
    declare name: string;
}
