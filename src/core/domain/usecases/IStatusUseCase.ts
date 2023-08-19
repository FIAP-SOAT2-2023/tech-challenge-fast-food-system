import { Status } from "../entities/status";


export interface IStatusUseCase {
    addStatus(body: Status): Promise<Status>;
    getAllStatus(): Promise<Status[]>;
    getByKey(key: string): Promise<Status>;
}
