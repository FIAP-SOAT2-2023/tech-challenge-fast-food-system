import { injectable, inject } from "tsyringe";
import { Address } from "../../domain/address";
import AddressModel from "../../../infra/models/addressModel";
import { IAddressServicePortIn } from "../ports/in/IAddressServicePortIn";
import { IAddressRepository } from "../ports/out/addressRepository";

@injectable()
export class AddressService implements IAddressServicePortIn {
  constructor(private readonly addressRepository: IAddressRepository) {}
  addAddress(body: Address): Promise<AddressModel> {
    return this.addressRepository.addAddress(body);
  }
}
