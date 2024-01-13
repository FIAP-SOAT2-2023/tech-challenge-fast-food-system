import {Address} from "../entities/address";

export interface IAddressUseCase {
  addAddress(body: Address): Promise<Address>;
}
