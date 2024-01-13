import { Address } from "../../core/domain/entities/address";
export declare class AddressRequest implements Address {
    id: string;
    customerId: string;
    streetName: string;
    number: string;
    neighborhood: string;
    complement: string;
    zipCode: string;
    state: string;
    city: string;
    country: string;
}
