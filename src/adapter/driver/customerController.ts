import express, { Request, Response } from "express";
import { Customer } from "../../core/domain/customer";
import { CustomerService } from "../../core/applications/services/customerService";

export class CustomerController {
  constructor(private readonly customerService: CustomerService) {}

  async getCustomerById(req: Request, res: Response) {
    const id = req.params.id;
    const user = await this.customerService.getCustomerById(id);
    res.status(200).json(user);
  }

  async addCustomer(req: Request, res: Response) {
    let customer: Customer = {
      ...req.body,
    };
    const result = await this.customerService.addCustomer(customer);
    res.status(200).json(result);
  }
}
