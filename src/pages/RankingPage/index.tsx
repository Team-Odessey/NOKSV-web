import * as S from "./style";
import MenuButton from "@src/components/common/ui/MenuButton";
import RankingItem from "@src/components/ranking/RankingItem";
import { Playtime, Rank, UserDetailItem, UserInfo } from "@src/components/ranking/RankingItem/style";
import { useGetRankByCategory } from "@src/queries/ranking/ranking.query";
import { MainContentsBox } from "@src/styles/globalStyles";
import { UserRankENUM } from "@src/types/user/user.type";
import dayjs from "dayjs";
import { useState } from "react";

interface MenuListType {
  text: string;
  data: UserRankENUM
}

const menuList: MenuListType[]  = [
  {
    text: "모험",
    data: "ADVENTURE"
  },
  {
    text: "벌목",
    data: "LUMBERING"
  },
  {
    text: "채광",
    data: "MINING"
  },
  {
    text: "사냥",
    data: "HUNTING"
  },
  {
    text: "소지금",
    data: "MONEY"
  }
]

const RankingPage = () => {
  const [selectedMenu, setSelectedMenu] = useState(menuList.find(item => item.data === "ADVENTURE"));
  const { data } = useGetRankByCategory(selectedMenu?.data || "ADVENTURE");

  return (
    <MainContentsBox>
      <S.RankingHeader>랭킹</S.RankingHeader>
      <div style={{ display: "flex", gap: 12 }}>
        {menuList.map((menu) => (
          <MenuButton
            key={menu.data}
            selected={selectedMenu?.data === menu.data}
            onClick={() => setSelectedMenu(menu)}
          >
            {menu.text}
          </MenuButton>
        ))}
      </div>
      <div
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <S.RankingItemHeader>
          <Rank/>
          <UserInfo>유저 이름</UserInfo>
          <UserDetailItem>{selectedMenu?.text} {selectedMenu?.data === "MONEY" ? "총합" : "레벨"}</UserDetailItem>
          <UserDetailItem>길드</UserDetailItem>
          <UserDetailItem>가입일자</UserDetailItem>
          <Playtime>총 접속시간</Playtime>
        </S.RankingItemHeader>
        {data?.map((item, idx) => (
          <RankingItem
            key={item.nickname}
            rank={idx+1}
            level={item.level}
            guildName={item.guildName || ""}
            username={item.username}
            nickname={item.nickname}
            totalPlayTime={item.totalPlayTime}
            joinDate={dayjs(item.joinDate).format("YYYY-MM-DD")}
            rankType={menuList.find(item => item.data === selectedMenu?.data)!.data}
          />
        ))}
      </div>
    </MainContentsBox>
  );
};

export default RankingPage;
