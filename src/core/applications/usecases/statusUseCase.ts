
import { Status } from 'core/domain/entities/status';
import IStatusRepository from 'core/domain/repositories/statusRepository';
import { IStatusUseCase } from 'core/domain/usecases/IStatusUseCase';

export class StatusUseCase implements IStatusUseCase {
  constructor(private readonly statusRepository: IStatusRepository) {}
  addStatus(body: Status): Promise<Status> {
    return this.statusRepository.addStatus(body);
  }

  getAllStatus(): Promise<Status[]> {
    return this.statusRepository.getAllStatus();
  }

  getByKey(key: string): Promise<Status> {
    return this.statusRepository.getByKey(key);
  }
}
