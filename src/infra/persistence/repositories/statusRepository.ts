import IStatusRepository from "core/domain/repositories/statusRepository";
import { Status } from "core/domain/entities/status";
import StatusModel from "../models/statusModel";


export class StatusRepository implements IStatusRepository {
  async addStatus(body: Status[]): Promise<Status[]> {
    const createdStatus = await StatusModel.bulkCreate(
      body.map(status => ({
        key: status.key,
        name: status.name,
      }))
    );
  
    return createdStatus;
  }

  async getAllStatus(): Promise<Status[]> {
    const status = await StatusModel.findAll({
      attributes: {
        exclude: ["id"],
      },
    });

    return status;
  }

  async getByKey(key: string): Promise<Status> {
    const status = await StatusModel.findOne({
      where: {
        key: key,
      },
    });

    if (!status) {
      throw new Error("Status não encontrado");
    }

    return status;
  }
}
