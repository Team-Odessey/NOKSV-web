export const QUERY_KEYS = {
  user: {
    getUserData: "get/user"
  },
  notice: {
    getAllNotice: "get/notice/all",
    getNoticeById: (id: number) => `get/notice/${id}`
  },
  guild: {
    getAllGuild: "get/guild/all",
    getGuildById: (name: string) => `get/guild/${name}`
  }
}