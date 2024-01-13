import { Request, Response } from "express";
import { CustomerUseCase } from "../../core/applications/usecases/customerUseCase";
import { AddressUseCase } from "../../core/applications/usecases/addressUseCase";
export declare class CustomerController {
    private readonly customerUseCase;
    private readonly addressUseCase;
    constructor(customerUseCase: CustomerUseCase, addressUseCase: AddressUseCase);
    getCustomerByDocument(req: Request, res: Response): Promise<void>;
    getCustomerByEmail(req: Request, res: Response): Promise<void>;
    addCustomer(req: Request, res: Response): Promise<void>;
}
