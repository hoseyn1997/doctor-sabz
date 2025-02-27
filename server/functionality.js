import {
  setCountingDown,
  verify_code,
} from "./user_queries.js";
import { send_sms } from "./send_sms.js";

export async function handle_send_code(phoneNumber) {
  await send_sms(phoneNumber)
    .then((value) => {
      setCountingDown(phoneNumber, value.code, true);
    })
    .catch((err) => {
      throw err;
    });
}

export async function handle_verify_code(phoneNumber, code) {
  try {
    const result = await verify_code(phoneNumber, code);
    // console.log("the first stage result is: ", result);
    return result;
  } catch (error) {
    throw error;
  }
}

export async function verification_timed_out(phoneNumber) {
  try {
    const user = await setCountingDown(phoneNumber, "", false);

  } catch (error) {
    throw error;
  }
}
