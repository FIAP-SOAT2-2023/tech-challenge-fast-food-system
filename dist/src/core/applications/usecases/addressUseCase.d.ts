import { IAddressUseCase } from "../../domain/usecases/IAddressUseCase";
import { IAddressRepository } from "../../domain/repositories/addressRepository";
import { Address } from "../../domain/entities/address";
export declare class AddressUseCase implements IAddressUseCase {
    private readonly addressRepository;
    constructor(addressRepository: IAddressRepository);
    addAddress(body: Address): Promise<Address>;
}
