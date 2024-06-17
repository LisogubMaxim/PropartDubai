import { phoneCountryCodes } from '../data/phoneCountryCodes';

export const validatePhoneNumber = (phoneNumber) => {
  if (!phoneNumber.startsWith('+')) {
    return false;
  }

  for (const country of phoneCountryCodes) {
    if (
      phoneNumber.startsWith(country.phone_code) &&
      phoneNumber.length === country.phone_number_length
    ) {
      return true;
    }
  }
  return false;
};
