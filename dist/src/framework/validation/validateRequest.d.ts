import { Response } from "express";
export declare class ValidationUtil {
    static validateAndTransform<T>(classType: new () => T, requestBody: any, res: Response): Promise<T>;
    static sendValidationErrorResponse(res: Response, errorMessages: string[]): void;
}
