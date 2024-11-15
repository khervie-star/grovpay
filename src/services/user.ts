import { getAxiosInstance } from "./instance";

const serviceName = "user";
// const port = "8592";
const baseUrl = "https://161.35.9.144:8592/api/v1";

export const userLogin = async (data: any) => {
  const axiosInstance = getAxiosInstance(baseUrl);

  const response = await axiosInstance({
    url: `${serviceName}/login`,
    method: "POST",
    data
  });

  return response.data;
};

export const userRegistration = async (data: any) => {
  const axiosInstance = getAxiosInstance(baseUrl);

  const response = await axiosInstance({
    url: `${serviceName}/registration/step1`,
    method: "POST",
    data
  });

  return response.data;
};

// Get User
export const getUserByEmail = async (data: any) => {
  const axiosInstance = getAxiosInstance(baseUrl);

  const response = await axiosInstance({
    url: `${serviceName}/email/${data.userEmail}`,
    method: "GET"
  });

  return response.data;
};

export const getUserById = async (data: any) => {
  const axiosInstance = getAxiosInstance(baseUrl);

  const response = await axiosInstance({
    url: `${serviceName}/id/${data.userId}`,
    method: "GET"
  });

  return response.data;
};
