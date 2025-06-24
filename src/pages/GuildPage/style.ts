import { nokPalette } from "@src/constants/color/color.constants";
import { nokTypograpy } from "@src/constants/font/font.constants";
import styled from "styled-components";

export const GuildHeader = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  ${nokTypograpy.VITRO.Extra2}
  color: ${nokPalette.labelNormal};
`
export const GuildItemContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
  grid-row-gap: 28px;
  grid-auto-rows: minmax(100px, auto);

  > :hover {
    background-color: ${nokPalette.fillAlternative};
  }
`