import { IAddressServicePortIn } from 'core/applications/ports/in/iAddressServicePortIn';
import { IAddressRepository } from 'core/applications/ports/out/addressRepository';
import { injectable, inject } from "tsyringe";
import { Address } from 'core/domain/address';
import AddressModel from "infra/models/addressModel";

@injectable()
export class AddressService implements IAddressServicePortIn {
  constructor(private readonly addressRepository: IAddressRepository) {}
  addAddress(body: Address): Promise<AddressModel> {
    return this.addressRepository.addAddress(body);
  }
}
