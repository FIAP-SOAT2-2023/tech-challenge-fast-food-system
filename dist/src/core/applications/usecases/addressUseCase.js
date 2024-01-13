"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddressUseCase = void 0;
class AddressUseCase {
    constructor(addressRepository) {
        this.addressRepository = addressRepository;
    }
    addAddress(body) {
        return this.addressRepository.addAddress(body);
    }
}
exports.AddressUseCase = AddressUseCase;
//# sourceMappingURL=addressUseCase.js.map