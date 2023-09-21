export function validatePhoneNumber(phoneNumber: string): string[] {
    const validPhoneNumbers: string[] = [];
    
    if (
      phoneNumber !== undefined &&
      phoneNumber !== null &&
      phoneNumber.length >= 9 &&
      phoneNumber.length <= 10 &&
      /^[0-9]+$/.test(phoneNumber) &&
      phoneNumber.startsWith('0')
    ) {
      // phoneNumber is valid
      validPhoneNumbers.push(phoneNumber.substring(1));
      return validPhoneNumbers;
    }
    
    throw new Error('PHONE_NUMBER_IS_NOT_VALID'); 
  }