import { Address } from 'core/domain/entities/address';

export interface IAddressRepository {
  addAddress(body: Address): Promise<Address>;
}
