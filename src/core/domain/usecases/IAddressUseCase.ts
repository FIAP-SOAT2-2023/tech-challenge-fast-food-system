import { Address } from 'core/domain/entities/address';

export interface IAddressUseCase {
  addAddress(body: Address): Promise<Address>;
}
