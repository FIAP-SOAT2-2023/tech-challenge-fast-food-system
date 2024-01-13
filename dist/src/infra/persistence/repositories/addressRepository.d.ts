import { IAddressRepository } from "../../../core/domain/repositories/addressRepository";
import { Address } from "../../../core/domain/entities/address";
export declare class AddressRepository implements IAddressRepository {
    addAddress(body: Address): Promise<Address>;
}
