import axios from "axios";
import { validatePhoneNumber } from "./phoneValidator";


export async function checkCanCall(phone: string, token: string, name: string) {

  if(!token || !name ) {
    throw new Error('TOKEN_OR_NAME_ARE_MISSING');
  } 

 const validPhoneNumberList = validatePhoneNumber(phone);

    // Request body
    const requestData = {
      data: validPhoneNumberList,
    };

    // Request headers 
    const config = {
        headers: {
          token: token, 
          name: name, 
          'Content-Type': 'application/json',
        },
      };

      try {

    // Request
        const response = await axios.post("https://pverification.fta.gov.il/restricted/phone-list-verification", requestData, config);
    
        // Check the response and return the result
        if (response.data.data.length !== 0) {
          return true;
        } else {
          return false;
        }
      } catch (error: any) {
        throw new Error(error.message);
      }
    }