import IStatusRepository from "core/domain/repositories/statusRepository";
import { Status } from "core/domain/entities/status";
import StatusModel from "../models/statusModel";


export class StatusRepository implements IStatusRepository {
  async addStatus(status: Status[]): Promise<Status[]> {
    const createdStatuses = await StatusModel.bulkCreate(
      status.map(singleStatus => ({
        key: singleStatus.key,
        name: singleStatus.name,
      }))
    );
  
    return createdStatuses;
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
