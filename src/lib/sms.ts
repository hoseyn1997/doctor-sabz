import axios from "axios";

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
      "x-api-key":
        "XnYkG4R9iex2k5VfQbYFGsdcAQLhFPJ1r2Vv7XM52nrFkUJhNqZ2ws468CVHsE56",
    },
    data: data,
  };
  const response = await axios(config)
    .then((resp) => resp)
    .catch((err) => {
      console.log(err);
    });
}
