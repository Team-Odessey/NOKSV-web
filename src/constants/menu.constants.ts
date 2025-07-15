// import Shop from '@src/assets/icons/shop.svg?react';
// import Wiki from '@src/assets/icons/wiki.svg?react';
import Guild from '@src/assets/icons/guild.svg?react';
import Notification from '@src/assets/icons/notification.svg?react';
import Rank from '@src/assets/icons/rank.svg?react'

export const MENU = [
  {
    text: "길드",
    url: "/guild",
    icon: Guild,
  },
  {
    text: "공지사항",
    url: "/notification",
    icon: Notification,
  },
  {
    text: "랭킹",
    url: "/ranking",
    icon: Rank,
  },
  // {
  //   text: "유저 상점",
  //   url: "/map",
  //   icon: Shop,
  // },
  // {
  //   text: "위키",
  //   url: "/wiki",
  //   icon: Wiki,
  // },
]