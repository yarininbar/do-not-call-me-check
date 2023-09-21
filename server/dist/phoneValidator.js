"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validatePhoneNumber = void 0;
function validatePhoneNumber(phoneNumber) {
    const validPhoneNumbers = [];
    if (phoneNumber !== undefined &&
        phoneNumber !== null &&
        phoneNumber.length >= 9 &&
        phoneNumber.length <= 10 &&
        /^[0-9]+$/.test(phoneNumber) &&
        phoneNumber.startsWith('0')) {
        // phoneNumber is valid
        validPhoneNumbers.push(phoneNumber.substring(1));
        return validPhoneNumbers;
    }
    throw new Error('PHONE_NUMBER_IS_NOT_VALID');
}
exports.validatePhoneNumber = validatePhoneNumber;
