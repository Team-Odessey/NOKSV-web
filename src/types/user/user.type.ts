export type UserRankType = "adventure" | "woodCutting" | "mining" | "hunt" | "money";

export interface UserRankData {
  rank?: number;
  username: string;
  nickname: string;
  level: Record<UserRankType, number>;
  guild: string;
  joinedAt: string;
  playtime: number;
  rankType: UserRankType;
}