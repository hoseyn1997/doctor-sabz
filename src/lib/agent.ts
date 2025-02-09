import axios, { AxiosResponse } from "axios";
import { Product } from "./types/Product";


axios.defaults.baseURL = "";
const responseBody = <T>(response: AxiosResponse<T>) => response.data;


const requests = {
  get: <T>(url: string) => axios.get<T>(url).then(responseBody),
  post: <T>(url: string, body: object) => axios.post<T>(url, body).then(responseBody),
  put: <T>(url: string, body: object) => axios.put<T>(url, body).then(responseBody),
  del: <T>(url: string) => axios.delete<T>(url).then(responseBody),
}


const products = {
  list: requests.get<Product[]>('https://knowledgland.ir/api/lessons'),
};

const agent = {
  products,
}

export default agent;