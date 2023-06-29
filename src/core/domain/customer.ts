import { Address } from 'core/domain/address';

export interface Customer {
  id: string;
  firstName: string;
  lastName: string;
  document: string;
  email: string;
  cellphone: string;
  address: Address;
}
