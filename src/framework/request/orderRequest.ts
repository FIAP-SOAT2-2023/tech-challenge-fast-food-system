import { Length, IsNotEmpty } from 'class-validator';
import { Order } from 'core/domain/entities/order';
import { OrderStatus } from 'core/domain/entities/orderStatus';

export class OrderRequest implements Order {
    declare id: string;

    @IsNotEmpty({ message: 'Status object required' })
    declare status: OrderStatus;
}

