import {Address} from "../entities/address";

export interface IAddressRepository {
  addAddress(body: Address): Promise<Address>;
}
