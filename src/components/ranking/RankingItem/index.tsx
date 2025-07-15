import { UserRankData } from "@src/types/user/user.type";
import * as S from "./style";

const RankingItem = ({ rank, username, nickname, level, guild, joinedAt, playtime, rankType }: UserRankData) => (
  <S.Container>
    <S.Rank>{`#${rank}`}</S.Rank>
    <S.UserInfo>
      <img src={`https://mc-heads.net/avatar/${username}`} alt="userIcon" />
      <div>
        <p>{nickname}</p>
        <span>{username}</span>
      </div>
    </S.UserInfo>
    <S.UserDetailItem>{`${level[rankType]}${rankType === "money" ? "원" : "Lv"}`}</S.UserDetailItem>
    <S.UserDetailItem>{guild}</S.UserDetailItem>
    <S.UserDetailItem>{joinedAt}</S.UserDetailItem>
    <S.Playtime>{`${playtime}시간`}</S.Playtime>
  </S.Container>
);

export default RankingItem; 