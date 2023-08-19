import { Address } from "core/domain/entities/address";
import { IAddressRepository } from "core/domain/repositories/addressRepository";
import { IAddressUseCase } from "core/domain/usecases/IAddressUseCase";

export class AddressUseCase implements IAddressUseCase {
  
  constructor(private readonly addressRepository: IAddressRepository) {}
  
  addAddress(body: Address): Promise<Address> {
    return this.addressRepository.addAddress(body);
  }
}
