import Banner from "@src/components/main/Banner"
import ServerRecord from "@src/components/main/ServerRecord"
import ServerStatus from "@src/components/main/ServerStatus"
import ServerEvent from "@src/components/main/ServerEvent";
import NokButton from "@src/components/common/ui/NokButton";
import * as S from './style';

const MainPage = () => {
  return (
    <S.MainPageContainer>
      <Banner/>
      <S.MainContainer>
      <ServerRecord/>
      <S.MainOnBoarding>
        저희 NOKSV는..
        <div>
          <span>녹 ( NOK ) 서버</span>는 <p>대구소프트웨어마이스터고등학교</p>에서 꾸준히 운영될 수 있는 마인크래프트 서버를 만들어보자는 목적으로 시작된, <p>RP 기반 마인크래프트 야생 서버</p>입니다.
        </div>
        <section>
          NOKSV에서 여러분은 각자만의 캐릭터를 가지고 RP ( Role Playing ) 를 진행하며 서버에서 살아가게 됩니다. 현실의 내가 아닌 또 다른 나를 통해 서버를 즐겨주세요!
          <a href="https://namu.wiki/w/RP#s-1" target="_blank">RP란? ↗︎</a>
        </section>
      </S.MainOnBoarding>
      <S.ServerInfoContainer>
        <ServerStatus/>
        <ServerEvent/>
        <S.ServerInfoMain>
          공식 커뮤니티
          <NokButton
            text="디스코드"
            isFilled
            onClickFn={() => window.open("https://discord.gg/DaRNtSXM")}
            height="48px"
            customStyle={{
              fontFamily:"Pretendard-Bold",
              fontSize: "16px",
              lineHeight: "150%",
              letterSpacing: "-0.16px"
            }}
          />
        </S.ServerInfoMain>
      </S.ServerInfoContainer>
    </S.MainContainer>
    </S.MainPageContainer>
  )
}


export default MainPage