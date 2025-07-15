import Banner from "@src/components/main/Banner"
import ServerRecord from "@src/components/main/ServerRecord"
import ServerStatus from "@src/components/main/ServerStatus"
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
          <span>녹 ( NOK ) 서버</span>는 대소마고 해커톤을 기점으로 만들어진 <p>RPG + 야생 서버입니다.</p>
        </div>
        <div>
          <p>물이 부족한 세계</p>를 컨셉으로 하여 야생 파밍과 RPG를 특별하게 구현하였습니다.
        </div>
        <div>
          NOKSV에서 여러분은 당연하게 여겨지던 “물" 이라는 자원에 의해 불편하고, 힘든 경험을 하게 됩니다. 이를 통해 우리는 유저 여러분들이 색다르고 이로운 시간을 가졌으면 좋겠습니다.
        </div>
      </S.MainOnBoarding>
      <S.ServerInfoContainer>
        <ServerStatus/>
        <S.ServerInfoMain>
          공식 커뮤니티
          <NokButton
            text="디스코드"
            isFilled
            onClickFn={() => window.open("https://discord.gg/HR9MGvHhRH")}
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