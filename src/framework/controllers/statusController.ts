import { StatusUseCase } from "core/applications/usecases/statusUseCase";
import { Request, Response } from "express";
import { StatusRequest } from "framework/request/statusRequest";
import { ValidationUtil } from "framework/validation/validateRequest";


export class StatusController {

  constructor(private readonly statusUseCase: StatusUseCase) { }

  async addStatus(req: Request, res: Response) {
    const status = await ValidationUtil.validateAndTransform(StatusRequest, req.body, res);
    const result = await this.statusUseCase.addStatus(status);

    const data = {
      uuid: result.uuid,
      key: result.key,
      name: result.name,
    }
    res.status(200).json(data);
  }

  async getAllStatus(req: Request, res: Response) {
    const result = await this.statusUseCase.getAllStatus();
    res.status(200).json(result);
  }
}
