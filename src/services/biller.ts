import { getAxiosInstance } from "./instance";

const billers = "billers";

const bills = "billers";

export const fetchAllBillers = async () => {
  const axiosInstance = getAxiosInstance();

  const response = await axiosInstance({
    url: `${billers}`,
    method: "GET"
  });

  return response.data;
};

export const fetchBillersByCategory = async (data: any) => {
  const axiosInstance = getAxiosInstance();

  const response = await axiosInstance({
    url: `${billers}/category/${data?.categoryId}`,
    method: "GET"
  });

  return response.data;
};

export const validateCustomer = async (data: any) => {
  const axiosInstance = getAxiosInstance();

  const response = await axiosInstance({
    url: `${bills}/validate-customer`,
    method: "POST",
    data
  });

  return response.data;
};
