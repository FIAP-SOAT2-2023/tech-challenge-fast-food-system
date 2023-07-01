import { Address } from 'core/domain/address';

export interface Customer {
  uuid?: string;
  firstName: string;
  lastName: string;
  document: string;
  email: string;
  cellphone: string;
  address?: Address;
}
