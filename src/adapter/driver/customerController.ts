import express, { Request, Response } from "express";
import { Customer } from "core/domain/customer";
import { CustomerService } from "core/applications/services/customerService";
import { Address } from "core/domain/address";
import { AddressService } from "core/applications/services/addressService";
import { CustomerRequest } from "./request/customerRequest";
import { ValidationUtil } from "adapter/validation/validateRequest";

export class CustomerController {
  constructor(
    private readonly customerService: CustomerService,
    private readonly addressService: AddressService
  ) {}

  async getCustomerByDocument(req: Request, res: Response) {
    const document = req.params.document;
    const customer = await this.customerService.getCustomerByDocument(document);
    res.status(200).json(customer);
  }

  async addCustomer(req: Request, res: Response) {
    const customerRequest = await ValidationUtil.validateAndTransform(
      CustomerRequest,
      req.body,
      res
    );

    const result = await this.customerService.addCustomer(customerRequest);

    let address: Address = {
      ...req.body.address,
      customerId: result.uuid,
    };
    await this.addressService.addAddress(address);
    res.status(200).json(result);
  }
}
