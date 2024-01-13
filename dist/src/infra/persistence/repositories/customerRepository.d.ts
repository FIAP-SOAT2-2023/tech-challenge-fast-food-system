import { ICustomerRepository } from "../../../core/domain/repositories/customerRepository";
import { Customer } from "../../../core/domain/entities/customer";
export declare class CustomerRepository implements ICustomerRepository {
    getCustomerByDocument(document: string): Promise<Customer>;
    addCustomer(body: Customer): Promise<Customer>;
    findByUUID(customerId: string): Promise<Customer>;
    getCustomerByEmail(email: string): Promise<Customer>;
}
