import axios from "axios";

const APIKEY = process.env.SMS_IR_API_KEY;

export async function send(code: number) {
  var data = JSON.stringify({
    mobile: "09145651334",
    templateId: "988517",
    parameters: [{ name: "CODE", value: code.toString() }],
  });
  var config = {
    method: "post",
    url: "https://api.sms.ir/v1/send/verify",
    headers: {
      "Content-Type": "application/json",
      Accept: "text/plain",
      "x-api-key": APIKEY,
    },
    data: data,
  };
  const response = await axios(config)
    .then((resp) => resp)
    .catch((err) => {
      console.log(err);
    });
}
