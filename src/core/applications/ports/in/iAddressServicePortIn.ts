import AddressModel from "../../../../infra/models/addressModel";
import { Address } from "../../../domain/address";

export interface IAddressServicePortIn {
  addAddress(body: Address): Promise<AddressModel>;
}
