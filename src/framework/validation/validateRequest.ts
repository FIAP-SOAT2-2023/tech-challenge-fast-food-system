import { plainToClass } from "class-transformer";
import { validate, ValidationError } from "class-validator";
import { Request, Response } from "express";

export class ValidationUtil {
  static async validateAndTransform<T>(classType: new () => T, requestBody: any, res: Response): Promise<T> {
    const object = plainToClass(classType, requestBody);
    const errors: ValidationError[] = await validate(object as Object);

    if (errors.length > 0) {
      const errorMessages: string[] = errors.map((error) => Object.values(error.constraints || "")).join(",").split(",");
      this.sendValidationErrorResponse(res, errorMessages)
      throw new Error;
    }

    return object;
  }

  static sendValidationErrorResponse(res: Response, errorMessages: string[]): void {
    res.status(400).json({ error: errorMessages });
  }
}
