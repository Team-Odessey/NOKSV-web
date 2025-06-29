export interface UserType {
  gameName: string;
  nickName: string;
  guildName: string;
  profileImg: string | null;
  rank: Record<UserRankType, rankInfo>;
  registerAt: string;
  playtime: number;
  killcount: number;
  isPublic: boolean;
}

export const UserRankFinder: Record<UserRankType, string> = {
  "adventure": "탐험",
  "farming": "농사",
  "mining": "채광",
  "fishing": "낚시",
  "collect": "수집",
  "money": "소지금",
  "occupy": "점령"
}
export type UserRankType = "adventure" | "farming" | "mining" | "fishing" | "collect" | "money" | "occupy";
interface rankInfo {
  ranking: number;
  level: number;
}


export const USER_IDPW = [
  {
    name: "Tetromino_04",
    password: "woals1234!!"
  },
  {
    name: "oowgnajiohc",
    password: "password",
  },
  {
    name: "bluechanni",
    password: "channichanni",
  },
  {
    name: "jbj338033",
    password: "bao",
  },
]

export const USER: UserType[] = [
  {
    isPublic: true,
    gameName: "Tetromino_04",
    nickName: "박재민",
    guildName: "아무개",
    profileImg: null,
    rank: {
      adventure: {
        ranking: 1,
        level: 100
      },
      farming: {
        ranking: 19,
        level: 99
      },
      mining: {
        ranking: 302,
        level: 12
      },
      fishing: {
        ranking: 108,
        level: 64
      },
      collect: {
        ranking: 2,
        level: 355
      },
      money: {
        ranking: 2,
        level: 120
      },
      occupy: {
        ranking: 219,
        level: 200
      },
    },
    registerAt: "2025. 09 23.",
    playtime: 100,
    killcount: 20
  },
  {
    isPublic: true,
    gameName: "oowgnajiohc",
    nickName: "최장우",
    guildName: "아무개",
    profileImg: null,
    rank: {
      adventure: {
        ranking: 99,
        level: 1
      },
      farming: {
        ranking: 99,
        level: 1
      },
      mining: {
        ranking: 999,
        level: 1
      },
      fishing: {
        ranking: 999,
        level: 1
      },
      collect: {
        ranking: 999,
        level: 1
      },
      money: {
        ranking: 999,
        level: 1
      },
      occupy: {
        ranking: 999,
        level: 1
      },
    },
    registerAt: "2025. 06. 19.",
    playtime: 1,
    killcount: 1,
  },
  {
    isPublic: true,
    gameName: "bluechanni",
    nickName: "김은찬",
    guildName: "아무개",
    profileImg: null,
    rank: {
      adventure: {
        ranking: 98,
        level: 1
      },
      farming: {
        ranking: 98,
        level: 1
      },
      mining: {
        ranking: 998,
        level: 1
      },
      fishing: {
        ranking: 998,
        level: 1
      },
      collect: {
        ranking: 998,
        level: 1
      },
      money: {
        ranking: 998,
        level: 1
      },
      occupy: {
        ranking: 998,
        level: 1
      },
    },
    registerAt: "2025. 07. 20.",
    playtime: 2,
    killcount: 0,
  },
  {
    isPublic: true,
    gameName: "jbj338033",
    nickName: "전바오",
    guildName: "아무개",
    profileImg: null,
    rank: {
      adventure: {
        ranking: 2,
        level: 98
      },
      farming: {
        ranking: 4,
        level: 120
      },
      mining: {
        ranking: 1,
        level: 1000
      },
      fishing: {
        ranking: 1,
        level: 1000
      },
      collect: {
        ranking: 1,
        level: 360
      },
      money: {
        ranking: 10000,
        level: 1
      },
      occupy: {
        ranking: 20,
        level: 40
      },
    },
    registerAt: "2025. 01. 03.",
    playtime: 400,
    killcount: 43,
  },
]