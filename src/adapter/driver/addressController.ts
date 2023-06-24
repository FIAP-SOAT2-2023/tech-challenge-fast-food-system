import express, { Request, Response } from "express";
import { AddressService } from "../../core/applications/services/addressService";
import { Address } from "../../core/domain/address";

export class AddressController {
  constructor(private readonly addressService: AddressService) {}

  async addAddress(req: Request, res: Response) {
    let address: Address = {
      ...req.body,
    };
    const result = await this.addressService.addAddress(address);
    res.status(200).json(result);
  }
}
