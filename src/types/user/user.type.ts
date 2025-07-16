export type UserRankType = "adventure" | "lumbering" | "mining" | "hunting" | "money";
export type UserRankENUM = "ADVENTURE" | "LUMBERING" | "MINING" | "HUNTING" | "MONEY";

export interface UserInfoRes {
  "id": number;
  "username": string;
  "nickname": string;
  "guildName": string | null;
  "totalPlayTime": number;
  "killCount": number;
  "joinDate": string;
  "stats": Record<UserRankENUM, UserStatsInfo>;
  "rankings": Record<UserRankENUM, {rank: number}>
}

export interface UserStatsInfo {
  category: UserRankENUM;
  level: number,
  exp: number
}

export const UserRankFinder: Record<UserRankENUM, string> = {
  "ADVENTURE": "탐험",
  "MINING": "채광",
  "MONEY": "소지금",
  "LUMBERING": "벌목",
  "HUNTING": "사냥"
}

