import AddressModel from "../../../../infra/models/addressModel";
import { Address } from "../../../domain/address";

export interface IAddressRepository {
  addAddress(body: Address): Promise<AddressModel>;
}
