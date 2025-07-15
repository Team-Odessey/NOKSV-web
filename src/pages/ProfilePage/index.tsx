import { useNavigate, useParams } from "react-router-dom";
import * as S from './style';
import { useEffect, useState } from "react";
import { USER, UserRankFinder, UserType } from "@src/constants/dummy/user.dummy";
import { NotFoundPageContainer } from "@src/pages/NotFoundPage";
import NokButton from "@src/components/common/ui/NokButton";
import { nokPalette } from "@src/constants/color/color.constants";
import { UserRankType } from "@src/types/user/user.type";

const ProfilePage = () => {
  const { id } = useParams();
  const myName = localStorage.getItem("username")
  const [userData, setUserData] = useState<UserType | null>(null);
  const nav = useNavigate();

  const logout = () => {
    localStorage.removeItem("username")
    nav('/')
  }

  useEffect(() => {
    if (id) {
      setUserData(USER.find(item => item.gameName === id) || null)
    }
  }, [id])

  return (userData?.isPublic && userData) ? (
    <S.ProfilePageContainer>
      <header>
        프로필
        {(myName === userData.gameName) && (
          <NokButton
            isFilled 
            color={nokPalette.statusNegative} 
            text="로그아웃"
            onClickFn={() => confirm("로그아웃하시겠습니까?")
              ? logout()
              : void(0)}
          />)}
      </header>
      <section>
        <aside>
          <S.ProfilePageUserInfo>
            <img alt="profile Img" src="../src/assets/baseprofileimg.jpeg"/>
            <section>
              <div>
                <p>{userData?.gameName}</p>
                {userData?.nickName}
              </div>
              [{userData?.guildName}] 길드
            </section>
          </S.ProfilePageUserInfo>
          <S.ProfileStat>
            스테이터스
            {(["adventure" , "mining" , "hunt", "woodCutting"] as UserRankType[])
            .map(item => (
            <S.ProfileStatItem key={item}>
              <p>{UserRankFinder[item]}</p>
              {userData.rank[item].level}Lv
            </S.ProfileStatItem>))}
          </S.ProfileStat>
        </aside>
        <S.ProfileRankContainer>
          랭킹
          {(["adventure" , "mining" , "money", "hunt", "woodCutting"] as UserRankType[])
          .map(item => (
            <S.ProfileRankItem key={item}>
              <div>
                <img src={`../src/assets/minecraftIcon/${item}.png`} alt="rank img" />
                <div>
                  {UserRankFinder[item]}
                  <S.ProfileRankNumber
                    $isBold={(userData.rank[item].ranking === 1).toString()}
                  >
                    #{userData.rank[item].ranking}
                  </S.ProfileRankNumber>
                </div>
              </div>
              {userData.rank[item].level}{item === "money" ? "CR" : "등"}
            </S.ProfileRankItem>
          ))}
        </S.ProfileRankContainer>
        <S.ProfileRecordContainer>
          기록
          <S.ProfileRecordItem>
            가입일
            <p>{userData.registerAt}</p>
          </S.ProfileRecordItem>
          <S.ProfileRecordItem>
            총 플레이 시간
            <p>{userData.playtime}시간</p>
          </S.ProfileRecordItem>
          <S.ProfileRecordItem>
            킬 횟수
            <p>{userData.killcount}회</p>
          </S.ProfileRecordItem>
        </S.ProfileRecordContainer>
      </section>
    </S.ProfilePageContainer>
  ) : (
    <NotFoundPageContainer>
      <p>해당 유저를 찾을 수 없습니다!</p>
      {id} 이름의 유저가 존재하지 않거나, 비공개 프로필입니다.
      <div>
        <NokButton text="홈으로" onClickFn={() => nav("/")} isFilled color={nokPalette.primaryNormal}/>
        <NokButton text="돌아가기" onClickFn={() => nav(-1)} isFilled/>
      </div>
    </NotFoundPageContainer>
  )
}

export default ProfilePage