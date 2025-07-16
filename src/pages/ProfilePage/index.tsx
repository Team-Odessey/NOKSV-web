import { useNavigate, useParams } from "react-router-dom";
import * as S from './style';
// import { NotFoundPageContainer } from "@src/pages/NotFoundPage";
import NokButton from "@src/components/common/ui/NokButton";
import { nokPalette } from "@src/constants/color/color.constants";
import { UserRankENUM, UserRankFinder } from "@src/types/user/user.type";
import { useGetMyData } from "@src/queries/user/user.query";
import dayjs from "dayjs";
import cookies from 'js-cookie';

const ProfilePage = () => {
  // const { id } = useParams();
  const { data: userData } = useGetMyData();

  const nav = useNavigate();
  const logout = () => {
    cookies.remove('access-token')
    cookies.remove('refresh-token')
    nav('/')
  }

  return (
    <S.ProfilePageContainer>
      <header>
        프로필
        {/* {(id === userData.userName) && ( */}
          <NokButton
            isFilled 
            color={nokPalette.statusNegative} 
            text="로그아웃"
            onClickFn={() => confirm("로그아웃하시겠습니까?")
              ? logout()
              : void(0)}
          />
          {/* )} */}
      </header>
      <section>
        <aside>
          <S.ProfilePageUserInfo>
            <img alt="profile Img" src={`https://mc-heads.net/avatar/${userData?.username}`}/>
            <section>
              <div>
                <p>{userData?.username}</p>
                {userData?.nickname}
              </div>
              {userData?.guildName && `[${userData.guildName}]`} 길드 {userData?.guildName || "없음"}
            </section>
          </S.ProfilePageUserInfo>
          <S.ProfileStat>
            스테이터스
            {(["ADVENTURE" , "MINING" , "HUNTING", "LUMBERING"] as UserRankENUM[])
            .map(item => (
            <S.ProfileStatItem key={item}>
              <p>{UserRankFinder[item]}</p>
              {userData?.stats[item] ? userData.stats[item].level : 0}Lv
            </S.ProfileStatItem>))}
          </S.ProfileStat>
        </aside>
        <S.ProfileRankContainer>
          랭킹
          {(["ADVENTURE" , "MINING" , "HUNTING", "LUMBERING", "MONEY"] as UserRankENUM[])
          .map(item => (
            <S.ProfileRankItem key={item}>
              <div>
                <img src={`../src/assets/minecraftIcon/${item}.png`} alt="rank img" />
                <div>
                  {UserRankFinder[item]}
                  <S.ProfileRankNumber
                    $isBold={(userData?.rankings[item] ? userData?.rankings[item].rank === 1 : false).toString()}
                  >
                    #{userData?.rankings[item] ? userData?.rankings[item].rank : "X"}
                  </S.ProfileRankNumber>
                </div>
              </div>
              {userData?.stats[item] ? userData.stats[item].level : 0}{item === "MONEY" ? "CR" : "레벨"}
            </S.ProfileRankItem>
          ))}
        </S.ProfileRankContainer>
        <S.ProfileRecordContainer>
          기록
          <S.ProfileRecordItem>
            가입일
            <p>{dayjs(userData?.joinDate).format("YYYY-MM-DD")}</p>
          </S.ProfileRecordItem>
          <S.ProfileRecordItem>
            총 플레이 시간
            <p>{userData?.totalPlayTime}시간</p>
          </S.ProfileRecordItem>
          <S.ProfileRecordItem>
            킬 횟수
            <p>{userData?.killCount}회</p>
          </S.ProfileRecordItem>
        </S.ProfileRecordContainer>
      </section>
    </S.ProfilePageContainer>
  )
  // : (
  //   <NotFoundPageContainer>
  //     <p>해당 유저를 찾을 수 없습니다!</p>
  //     {id} 이름의 유저가 존재하지 않거나, 비공개 프로필입니다.
  //     <div>
  //       <NokButton text="홈으로" onClickFn={() => nav("/")} isFilled color={nokPalette.primaryNormal}/>
  //       <NokButton text="돌아가기" onClickFn={() => nav(-1)} isFilled/>
  //     </div>
  //   </NotFoundPageContainer>
  // )
}

export default ProfilePage