import { Axios } from "axios";

export default (axiosInstance: Axios): void => {
  // 相应拦截器
  axiosInstance.interceptors.response.use(
    (response) => {
      const { responseType } = response.config;
      // 不拦截blob
      if (responseType === "blob") {
        return response;
      }
      const { success, errMsg } = response.data;
      // 处理失败请求
      if (!success) {
        window.$message.error(errMsg);
        return Promise.reject(errMsg);
      }
      return response.data;
    },
    (error) => {
      return Promise.reject(error);
    }
  );
};