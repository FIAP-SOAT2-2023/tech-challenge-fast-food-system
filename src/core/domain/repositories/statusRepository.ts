import { Status } from "../entities/status";


export default interface IStatusRepository {
    addStatus(body: Status): Promise<Status>;

    getAllStatus(): Promise<Status[]>;

    getByKey(key: string): Promise<Status>;
}