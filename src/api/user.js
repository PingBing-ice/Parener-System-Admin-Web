import request from '@/utils/request.js';
import { setting } from '@/config/setting';
const { tokenName } = setting;
export const login = async (data) => {
  const resp =request({
    url: '/user/admin/login',
    method: 'post',
    data,
  });
  console.log(resp)
  return resp;
};

export const getUserInfo = (accessToken) => {

  return {
    code: 200,
    msg: "success",
    data: {
      permissions: [
        "admin"
      ],
      username: "admin",
      avatar: "https://i.gtimg.cn/club/item/face/img/2/15922_100.gif"
    }
  }
};

export const logout = () => {
  return request({
    url: '/logout',
    method: 'post',
  });
};

export const register = async () => {
  return request({
    url: '/register',
    method: 'post',
  });
};
