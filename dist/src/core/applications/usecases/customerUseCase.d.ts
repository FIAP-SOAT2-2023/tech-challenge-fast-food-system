import { ICustomerUseCase } from "../../domain/usecases/ICustomerUseCase";
import { ICustomerRepository } from "../../domain/repositories/customerRepository";
import { Customer } from "../../domain/entities/customer";
export declare class CustomerUseCase implements ICustomerUseCase {
    private readonly customerRepository;
    constructor(customerRepository: ICustomerRepository);
    getCustomerByDocument(document: string): Promise<Customer>;
    getCustomerByMail(mail: string): Promise<Customer>;
    addCustomer(body: Customer): Promise<Customer>;
}
