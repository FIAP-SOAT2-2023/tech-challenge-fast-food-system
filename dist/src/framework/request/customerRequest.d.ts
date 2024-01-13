import { Customer } from "../../core/domain/entities/customer";
export declare class CustomerRequest implements Customer {
    firstName: string;
    lastName: string;
    document: string;
    email: string;
    cellphone: string;
}
