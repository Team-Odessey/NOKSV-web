import CONFIG from '@src/config/config.json';
import customAxios from '@src/libs/axios/customAxios';
import { UserInfoRes } from '@src/types/user/user.type';

class UserApi {
  public async getMyData(): Promise<UserInfoRes> {
    const { data } = await customAxios.get(`${CONFIG.server}/api/v1/members/me/profile`)
    return data;
  }
}

export default new UserApi();