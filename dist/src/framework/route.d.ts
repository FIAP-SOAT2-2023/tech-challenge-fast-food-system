import { Request, Response, NextFunction } from "express";
import "../infra/persistence/config/mysqlConfig";
export interface Error {
    message?: string;
}
export declare class Route {
    static asyncWrapper(req: Request, res: Response, next: NextFunction, fn: (req: Request, res: Response, next: NextFunction) => Promise<void>): Promise<void>;
    static Setup(): void;
}
