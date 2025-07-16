import { UserRankType } from "@src/types/user/user.type";

export interface UserType {
  userName: string;
  nickName: string;
  guildName: string;
  profileImg: string | null;
  rank: Record<UserRankType, rankInfo>;
  registerAt: string;
  playtime: number;
  killcount: number;
  isPublic: boolean;
}

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
    userName: "Tetromino_04",
    nickName: "박재민",
    guildName: "아무개",
    profileImg: null,
    rank: {
      adventure: {
        ranking: 1,
        level: 100
      },
      mining: {
        ranking: 302,
        level: 12
      },
      money: {
        ranking: 2,
        level: 120
      },
      woodCutting: {
        ranking: 1,
        level: 999
      },
      hunt: {
        ranking: 1,
        level: 999
      }
    },
    registerAt: "2025. 09 23.",
    playtime: 100,
    killcount: 20
  },
  {
    isPublic: true,
    userName: "oowgnajiohc",
    nickName: "최장우",
    guildName: "아무개",
    profileImg: null,
    rank: {
      adventure: {
        ranking: 99,
        level: 1
      },
      mining: {
        ranking: 999,
        level: 1
      },
      money: {
        ranking: 999,
        level: 1
      },
      woodCutting: {
        ranking: 1,
        level: 999
      },
      hunt: {
        ranking: 1,
        level: 999
      }
    },
    registerAt: "2025. 06. 19.",
    playtime: 1,
    killcount: 1,
  },
  {
    isPublic: true,
    userName: "bluechanni",
    nickName: "김은찬",
    guildName: "아무개",
    profileImg: null,
    rank: {
      adventure: {
        ranking: 98,
        level: 1
      },
      mining: {
        ranking: 998,
        level: 1
      },
      money: {
        ranking: 998,
        level: 1
      },
      woodCutting: {
        ranking: 1,
        level: 999
      },
      hunt: {
        ranking: 1,
        level: 999
      }
    },
    registerAt: "2025. 07. 20.",
    playtime: 2,
    killcount: 0,
  },
  {
    isPublic: true,
    userName: "jbj338033",
    nickName: "전바오",
    guildName: "아무개",
    profileImg: null,
    rank: {
      adventure: {
        ranking: 2,
        level: 98
      },
      mining: {
        ranking: 1,
        level: 1000
      },
      money: {
        ranking: 10000,
        level: 1
      },
      woodCutting: {
        ranking: 1,
        level: 999
      },
      hunt: {
        ranking: 1,
        level: 999
      }
    },
    registerAt: "2025. 01. 03.",
    playtime: 400,
    killcount: 43,
  },
]