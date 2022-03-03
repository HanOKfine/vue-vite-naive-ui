import axiosInstance from "@/plugins/axios"

const GETUSERINFOAPI = (data: any): Promise<any> =>
  axiosInstance.get('/blog/user', data);

export default{
  GETUSERINFOAPI, // 获取用户信息
}
