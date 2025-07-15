import * as S from "./style";
import MenuButton from "@src/components/common/ui/MenuButton";
import RankingItem from "@src/components/ranking/RankingItem";
import { Playtime, Rank, UserDetailItem, UserInfo } from "@src/components/ranking/RankingItem/style";
import { rankingDummy } from "@src/constants/dummy/ranking.dummy";
import { MainContentsBox } from "@src/styles/globalStyles";
import { UserRankType } from "@src/types/user/user.type";
import { useState } from "react";

interface MenuListType {
  text: string;
  data: UserRankType
}

const menuList: MenuListType[]  = [
  {
    text: "모험",
    data: "adventure"
  },
  {
    text: "벌목",
    data: "woodCutting"
  },
  {
    text: "채광",
    data: "mining"
  },
  {
    text: "사냥",
    data: "hunt"
  },
  {
    text: "소지금",
    data: "money"
  }
]

const RankingPage = () => {
  const [selectedMenu, setSelectedMenu] = useState(menuList.find(item => item.data === "adventure"));

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
          <UserDetailItem>{selectedMenu?.text} {selectedMenu?.data === "money" ? "총합" : "레벨"}</UserDetailItem>
          <UserDetailItem>길드</UserDetailItem>
          <UserDetailItem>가입일자</UserDetailItem>
          <Playtime>총 접속시간</Playtime>
        </S.RankingItemHeader>
        {rankingDummy.map((item, idx) => (
          <RankingItem
            key={item.nickname}
            rank={idx+1}
            level={item.level}
            guild={item.guild}
            username={item.username}
            nickname={item.nickname}
            playtime={item.playtime}
            joinedAt={item.joinedAt}
            rankType={menuList.find(item => item.data === selectedMenu?.data)!.data}
          />
        ))}
      </div>
    </MainContentsBox>
  );
};

export default RankingPage;
