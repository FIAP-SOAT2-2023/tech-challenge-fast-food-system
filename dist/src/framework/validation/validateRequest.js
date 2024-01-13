"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValidationUtil = void 0;
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
class ValidationUtil {
    static async validateAndTransform(classType, requestBody, res) {
        const object = (0, class_transformer_1.plainToClass)(classType, requestBody);
        const errors = await (0, class_validator_1.validate)(object);
        if (errors.length > 0) {
            const errorMessages = errors.map((error) => Object.values(error.constraints || "")).join(",").split(",");
            this.sendValidationErrorResponse(res, errorMessages);
            throw new Error;
        }
        return object;
    }
    static sendValidationErrorResponse(res, errorMessages) {
        res.status(400).json({ error: errorMessages });
    }
}
exports.ValidationUtil = ValidationUtil;
//# sourceMappingURL=validateRequest.js.map