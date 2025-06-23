import { nokPalette } from "@src/constants/color/color.constants"
import { nokTypograpy } from "@src/constants/font/font.constants"
import { MainContentsBox } from "@src/styles/globalStyles"
import styled from "styled-components"

export const MainPageContainer = styled.main`
  display: flex;
  flex-direction: column;
  width: 100vw;
  min-height: 832px;
`

export const MainContainer = styled(MainContentsBox)`
  gap: 48px;
`

export const MainOnBoarding = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  ${nokTypograpy.VITRO.Extra2}
  color: ${nokPalette.labelNormal};

  div {
    ${nokTypograpy.Pretendard.Headline.Regular};
    p {
      ${nokTypograpy.Pretendard.Headline.Bold};
      display: inline-block;
    }
    span {
      ${nokTypograpy.Pretendard.Headline.Bold};
      color: ${nokPalette.primaryNormal};
    }
  }

  section {
    display: flex;
    flex-direction: column;
    width: 100%;
    ${nokTypograpy.Pretendard.Headline.Regular};
    a {
      ${nokTypograpy.Pretendard.Body1.Regular};
      color: ${nokPalette.statusInfo};
    }
  }
`

export const ServerInfoContainer = styled.div`
  display: flex;
  gap: 36px;
  width: 100%;
  height: 220px;
`

export const ServerInfoMain = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 8px;
  padding: 20px 0;
  ${nokTypograpy.VITRO.Extra2}
  color: ${nokPalette.labelNormal};
`