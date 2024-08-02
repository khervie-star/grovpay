import axios from "axios";
// import { urlConfig } from "../config";
import Cookies from "js-cookie";
import toast from "react-hot-toast";

let axiosInstance: any;
// const config = urlConfig("8080");
// console.log(config.baseUrl);
const BASE_URL = "https://npv-api.pario.ng/api/v1";

const setupAxiosInstance = (baseUrl: string) => {
  // if (!axiosInstance) {
  axiosInstance = axios.create({
    baseURL: baseUrl,
    withCredentials: true,
    headers: {
      "Content-Type": "application/json"
      // "Access-Control-Allow-Origin": "*"
      // "access-control-allow-credentials": "true"
      // "access-control-allow-methods": "*"
    }
  });

  axiosInstance.interceptors.request.use((config: any) => {
    const access_token = Cookies.get("access_token");

    if (access_token) {
      config.headers.Authorization = `Bearer ${access_token}`;
    }

    if (config.data instanceof FormData) {
      config.headers["Content-Type"] = "multipart/form-data";
    }

    return config;
  });

  axiosInstance.interceptors.response.use(
    (response: any) => {
      return response;
    },
    (error: {
      response: { status: number; data: { responseMessage: string } };
    }) => {
      if (
        error.response &&
        error.response.status === 500 &&
        error.response.data.responseMessage &&
        error.response.data.responseMessage.startsWith("JWT expired at")
      ) {
        // Handle the JWT expired error here
        // For example, you might want to redirect to the login page
        // or attempt to refresh the token
        console.log("JWT expired, handling error...");

        // Logout();
        Cookies.remove("access_token");
        toast.error("Your session has expired. Please log in again.");
      }
      return Promise.reject(error);
    }
  );
  // }

  return axiosInstance;
};

export const getAxiosInstance = () => {
  return setupAxiosInstance(BASE_URL);
};
