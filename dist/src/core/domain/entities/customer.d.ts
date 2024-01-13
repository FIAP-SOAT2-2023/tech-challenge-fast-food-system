import { Address } from "./address";
export interface Customer {
    id?: number;
    uuid?: string;
    firstName: string;
    lastName: string;
    document: string;
    email: string;
    cellphone: string;
    address?: Address;
    message?: string;
}
export declare function isValidCPF(cpf: string): boolean;
