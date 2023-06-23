import { Address } from "./address";

export interface Customer {
  id: string;
  firtsName: string;
  lastName: string;
  document: string;
  email: string;
  cellphone: string;
  address: Address;
}
