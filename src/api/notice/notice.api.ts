import { NoticeRes } from "@src/types/notice/notice.type";
import axios from "axios";
import CONFING from "@src/config/config.json";

class NoticeApi {
  public async getAllNotice(): Promise<NoticeRes[]> {
    const { data } = await axios.get(`${CONFING.server}/api/v1/notices`)
    return data;
  }
  public async getNotice(noticeId: number): Promise<NoticeRes> {
    const { data } = await axios.get(`${CONFING.server}/api/v1/notice/${noticeId}`)
    return data;
  }
}

export default new NoticeApi();