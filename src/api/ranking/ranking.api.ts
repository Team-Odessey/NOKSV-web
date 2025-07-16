import { RankRes } from "@src/types/ranking/ranking.type";
import CONFIG from "@src/config/config.json";
import axios from "axios";
import { UserRankENUM } from "@src/types/user/user.type";

class RankingApi {
  public async getRankByCategory(category: UserRankENUM): Promise<RankRes[]> {
    const { data } = await axios.get(`${CONFIG.server}/api/v1/rankings/${category}?limit=100`)
    return data;
  }
}

export default new RankingApi();