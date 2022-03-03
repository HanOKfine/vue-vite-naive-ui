import { Axios } from "axios";

export default (axiosInstance: Axios): void => {
  axiosInstance.interceptors.request.use((config) => {
    return config;
  });
};