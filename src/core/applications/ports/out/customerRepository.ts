import CustomerModel from 'infra/models/customerModel';
import { Customer } from 'core/domain/customer';

export interface ICustomerRepository {
  getCustomerByDocument(document: string): Promise<CustomerModel>;

  addCustomer(body: Customer): Promise<CustomerModel>;
}
