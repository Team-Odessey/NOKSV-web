import { UserRankENUM } from "@src/types/user/user.type";
import * as S from "./style";
import { RankRes } from "@src/types/ranking/ranking.type";

interface RankingItemProps extends RankRes {
  rankType: UserRankENUM;
}
const RankingItem = ({ rank, username, nickname, level, guildName, joinDate, totalPlayTime, rankType }:RankingItemProps ) => (
  <S.Container>
    <S.Rank>{`#${rank}`}</S.Rank>
    <S.UserInfo>
      <img src={`https://mc-heads.net/avatar/${username}`} alt="userIcon" />
      <div>
        <p>{nickname}</p>
        <span>{username}</span>
      </div>
    </S.UserInfo>
    <S.UserDetailItem>{`${level}${rankType === "MONEY" ? "원" : "Lv"}`}</S.UserDetailItem>
    <S.UserDetailItem>{guildName}</S.UserDetailItem>
    <S.UserDetailItem>{joinDate}</S.UserDetailItem>
    <S.Playtime>{`${totalPlayTime}시간`}</S.Playtime>
  </S.Container>
);

export default RankingItem; 