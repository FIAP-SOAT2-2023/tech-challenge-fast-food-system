import { injectable } from "tsyringe";
import { IAddressRepository } from "../../../core/applications/ports/out/addressRepository";
import { Address } from "../../../core/domain/address";
import AddressModel from "../../../infra/models/addressModel";

@injectable()
export class AddressRepository implements IAddressRepository {
  
  async addAddress(body: Address): Promise<AddressModel> {
    const result = await AddressModel.create({
      ...body,
    });
    return result;
  }
}
