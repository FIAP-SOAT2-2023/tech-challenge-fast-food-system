import CustomerModel from "../../infra/persistence/models/customerModel";
import { Customer } from "../../core/domain/entities/customer";
export declare class CustomerMap {
    static Convert(message: string, customer?: CustomerModel): Partial<Customer>;
    static ConvertSimple(customer?: CustomerModel): Partial<Customer>;
}
