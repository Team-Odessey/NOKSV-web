import { nokPalette } from "@src/constants/color/color.constants"
import { nokTypograpy } from "@src/constants/font/font.constants"
import { MainContentsBox } from "@src/styles/globalStyles"
import { Link } from "react-router-dom"
import styled from "styled-components"

export const NotificationDetailContainer = styled(MainContentsBox)`
  ${nokTypograpy.VITRO.Extra2}
  color: ${nokPalette.labelNormal};
  & p {
    ${nokTypograpy.Pretendard.Body1.Regular}
  }
`

export const NotificationDetailMain = styled.main`
  display: flex;
  width: 100%;
  gap: 20px;
  > section {
    display: flex;
    flex-direction: column;
    padding: 0 8px;
    gap: 16px;
    width: 100%;
    > div {
      display: flex;
      flex-direction: column;
      ${nokTypograpy.Pretendard.Title2.Bold}
      > span {
        color: ${nokPalette.labelAlternative};
        ${nokTypograpy.Pretendard.Label.Bold};
      }
      > time {
        margin-top: 4px;
        color: ${nokPalette.labelAlternative};
        ${nokTypograpy.Pretendard.Caption2.Medium};
      }
    }
  }
`

export const NotificationSidebar = styled.aside`
  display: flex;
  flex-direction: column;
  padding-left: 20px;
  gap: 12px;
  border-left: 2px solid ${nokPalette.lineNormal};
  
  width: 300px;

  ${nokTypograpy.VITRO.Title2};
  color: ${nokPalette.labelNormal};
  user-select: none;

  > :hover {
    background-color: ${nokPalette.fillAlternative};
  }
`

export const NotificationNewItem = styled(Link)`
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: 4px 8px;
  border-radius: 4px;
  ${nokTypograpy.Pretendard.Caption1.Bold};
  color: ${nokPalette.labelAlternative};
  text-decoration: none;
  > p {
    ${nokTypograpy.Pretendard.Headline.Bold};
    color: ${nokPalette.labelNormal};
  }
`