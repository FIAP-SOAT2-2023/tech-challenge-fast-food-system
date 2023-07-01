
import { plainToClass, plainToInstance } from 'class-transformer';

import { validate, ValidationError } from 'class-validator';

const validateRequest = async ( classType: <T>, requestBody: any) => {


        const object = plainToInstance(classType: classType.prototype, requestBody);
        const errors: ValidationError[] = await validate(object);
    
        if (errors.length > 0) {
          const errorMessages: string[] = errors.map((error) => Object.values(error.constraints || "")).join(",").split(",");
          return null;
        }
    
        return object;
      
}


export default validateRequest;