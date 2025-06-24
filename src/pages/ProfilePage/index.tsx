import { useParams } from "react-router-dom";
import * as S from './style';
import { useEffect, useState } from "react";
import { USER, UserRankFinder, UserRankType, UserType } from "@src/constants/dummy/user.dummy";

const ProfilePage = () => {
  const { id } = useParams();
  const [userData, setUserData] = useState<UserType | null>(null);

  useEffect(() => {
    if (id) {
      setUserData(USER.find(item => item.gameName === id) || null)
    }
  }, [id])

  return userData ? (
    <S.ProfilePageContainer>
      프로필
      <section>
        <aside>
          <S.ProfilePageUserInfo>
            <img alt="profile Img" src="../src/assets/baseprofileimg.jpeg"/>
            <section>
              <div>
                <p>{userData?.gameName}</p>
                {userData?.nickName}
              </div>
              {userData?.guildName} 길드
            </section>
          </S.ProfilePageUserInfo>
          <S.ProfileStat>
            스테이터스
            {(["adventure" , "farming" , "mining" , "fishing"] as UserRankType[])
            .map(item => (
            <S.ProfileStatItem>
              <p>{UserRankFinder[item]}</p>
              {userData.rank[item].level}Lv
            </S.ProfileStatItem>))}
          </S.ProfileStat>
        </aside>
        <S.ProfileRankContainer>
          랭킹
          {(["adventure" , "farming" , "mining" , "fishing", "collect", "money", "occupy"] as UserRankType[])
          .map(item => (
            <S.ProfileRankItem>
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
              {item === "collect" ? `${userData.rank[item].level} / 360`
              : item === "occupy" ? `${userData.rank[item].level} 개`
              : item === "money" ? `${userData.rank[item].level} CR`
              : ""}
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
    <S.ProfileNotfound>
      해당하는 유저가 없습니다!
    </S.ProfileNotfound>
  )
}

export default ProfilePage