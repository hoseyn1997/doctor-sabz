import { response } from "@/app/common/types/apiResponse";
import { userLogginInfo, x_user } from "@/app/common/types/user";
import { videoWithCollection } from "@/app/common/types/video";
import axios, { AxiosError, AxiosResponse } from "axios";
import router from "next/router";
import toast from "react-hot-toast";

axios.defaults.baseURL = process.env.Next_APP_API_URL;

// const sleep = (delay: number) => {
//     return new Promise((resolve) => {
//         setTimeout(resolve, delay);
//     })
// }

const responseBody = <T>(response: AxiosResponse<T>) => response.data;

axios.interceptors.request.use((config) => {
  // const token = store.commonStore.token;
  // if (token && config.headers) {
  //     config.headers.Authorization = `Bearer ${token}`
  // };

  // temporary:
  // var userIdentifier = localStorage.getItem("userIdentifier")
  // if (userIdentifier)
  //     config.headers["userIdentifier"] = userIdentifier;
  return config;
});

axios.interceptors.response.use(
  async (response) => {
    // if (process.env.NODE_ENV === 'development')
    // await sleep(5000);
    /** pagination ifo */
    // const pagination = response.headers['pagination'];
    // if (pagination) {
    //     response.data = new PaginatedResult(response.data, JSON.parse(pagination));
    //     return response as AxiosResponse<PaginatedResult<any>>;
    // }
    return response;
  },
  (error: AxiosError) => {
    const { data, status, config } = error.response as AxiosResponse;
    switch (status) {
      case 400:
        if (config.method === "get" && data.errors.hasOwnProperty("id")) {
          router.push("/not-found");
        } else if (data.errors) {
          const modalStateErrors = [];
          for (const key in data.errors) {
            if (data.errors[key]) {
              modalStateErrors.push(data.errors[key]);
            }
          }
          throw modalStateErrors.flat();
        } else {
          toast.error("درخواست ناشناخته");
        }
        break;
      case 401:
        toast.error("کاربر ناشناخته");
        break;
      case 403:
        toast.error("غیر مجاز");
        break;
      case 404:
        router.push("/not-found");
        break;
      case 500:
        router.push("/server-error");
        break;
    }
    return Promise.reject(error);
  }
);

const requests = {
  get: <T>(url: string) => axios.get<T>(url).then(responseBody),
  post: <T>(url: string, body: {}) =>
    axios.post<T>(url, body).then(responseBody),
  put: <T>(url: string, body: {}) => axios.put<T>(url, body).then(responseBody),
  del: <T>(url: string) => axios.delete<T>(url).then(responseBody),
};

const users = {
  login: (info: userLogginInfo) =>
    requests.post<response<x_user>>("/api/login", info),
  logOut: () => requests.post<response<x_user>>("/api/logout", {}),
};

const videos = {
  list: (currentPage: number, ITEMS_PER_PAGE: number) =>
    requests.get<videoWithCollection[]>(
      `/api/video/list?page=${currentPage}&ITEMS_PER_PAGE=${ITEMS_PER_PAGE}`
    ),
};

const agent = {
  users,
  videos,
};
export default agent;
