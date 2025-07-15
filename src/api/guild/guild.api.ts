import axios from "axios";
import CONFING from "@src/config/config.json";
import { GuildRes } from "@src/types/guild/guild.type";

class GuildApi {
  public async getAllGuild(): Promise<GuildRes[]> {
    const { data } = await axios.get(`${CONFING.server}/api/v1/guilds`)
    return data;
  }

  public async getGuild(guildName: string): Promise<GuildRes> {
    const { data } = await axios.get(`${CONFING.server}/api/v1/guilds/search?name=${guildName}`)
    return data;
  }
}

export default new GuildApi();