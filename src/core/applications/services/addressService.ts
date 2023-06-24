import { injectable, inject } from "tsyringe";
import { Address } from "../../domain/address";
import AddressModel from "../../../infra/models/addressModel";
import { IAddressRepository } from "../ports/out/addressRepository";
import { IAddressServicePortIn } from "../ports/in/iAddressServicePortIn";

@injectable()
export class AddressService implements IAddressServicePortIn {
  constructor(private readonly addressRepository: IAddressRepository) {}
  addAddress(body: Address): Promise<AddressModel> {
    return this.addressRepository.addAddress(body);
  }
}
