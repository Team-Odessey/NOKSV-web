import { nokPalette } from "@src/constants/color/color.constants"
import { nokTypograpy } from "@src/constants/font/font.constants"
import styled from "styled-components"

const Banner = () => {
  return (
    <BannerContainer>
      세계를 개척하고 정복하라!
      <p>NOKSV</p>
      신개념 RP기반 마인크래프트 서버
    </BannerContainer>
  )
}

const BannerContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 360px;
  background: linear-gradient(0deg, #262423 0%, rgba(38, 36, 35, 0.53) 55%, rgba(38, 36, 35, 0.20) 100%), url('../src/assets/banner/minecraft-banner.png') center no-repeat;

  color: ${nokPalette.labelNormal};
  user-select: none;
  ${nokTypograpy.VITRO.Extra2}

  p {
    font-family: "VITRO INSPIRE OTF";
    font-size: 64px;
    line-height: 130%;
    letter-spacing: -1.92px;
    text-shadow: 0px 4px 6px #171615;
    color: ${nokPalette.primaryNormal};
  }
`

export default Banner