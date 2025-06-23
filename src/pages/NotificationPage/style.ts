import { nokPalette } from "@src/constants/color/color.constants";
import { nokTypograpy } from "@src/constants/font/font.constants";
import { MainContentsBox } from "@src/styles/globalStyles";
import styled from "styled-components";

export const NotificationPageContainer = styled(MainContentsBox)`
  > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    ${nokTypograpy.VITRO.Extra2}
    color: ${nokPalette.labelNormal};

    input {
      width: 280px;
      height: 40px;
      border: 1px solid ${nokPalette.lineNormal};
      border-radius: 4px;
      padding: 0 12px;
      color: ${nokPalette.labelNormal};
      background-color: ${nokPalette.fillAlternative};
    }
  }
`

export const NotificationItemContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
  grid-row-gap: 28px;
  grid-auto-rows: minmax(100px, auto);

  > :hover {
    background-color: ${nokPalette.fillAlternative};
  }
`