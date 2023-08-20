import { StatusUseCase } from "core/applications/usecases/statusUseCase";
import { Request, Response } from "express";
import { StatusRequest } from "framework/request/statusRequest";
import { ValidationUtil } from "framework/validation/validateRequest";


export class StatusController {

  constructor(private readonly statusUseCase: StatusUseCase) { }

  async addStatus(req: Request, res: Response) {
    const status = req.body
    const results = await this.statusUseCase.addStatus(status);

    const responseData = results.map(result => ({
      uuid: result.uuid,
      key: result.key,
      name: result.name,
    }))

    res.status(200).json(responseData);
  }

  async getAllStatus(req: Request, res: Response) {
    const result = await this.statusUseCase.getAllStatus();
    res.status(200).json(result);
  }
}
