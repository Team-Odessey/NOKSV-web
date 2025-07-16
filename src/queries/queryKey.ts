import { UserRankENUM } from "@src/types/user/user.type";

export const QUERY_KEYS = {
  user: {
    getUserMe: "get/user/me"
  },
  notice: {
    getAllNotice: "get/notice/all",
    getNoticeById: (id: number) => `get/notice/${id}`
  },
  guild: {
    getAllGuild: "get/guild/all",
    getGuildById: (name: string) => `get/guild/${name}`
  },
  rank: {
    getRankByCategory: (category: UserRankENUM) => `get/rank/${category}`
  }
}