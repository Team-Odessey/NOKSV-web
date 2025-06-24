import { nokPalette } from "@src/constants/color/color.constants";
import { nokTypograpy } from "@src/constants/font/font.constants";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const GuildItemContainer = styled(Link)`
  text-decoration: none;
  display: flex;
  gap: 12px;
  padding: 16px;
  width: 100%;
  height: 180px;
  
  border-radius: 4px;
  
  cursor: pointer;

  > img {
    width: 48px;
    height: 48px;
  }
`

export const GuildItemData = styled.section`
  display: flex;
  flex-direction: column;

  ${nokTypograpy.Pretendard.Body1.Medium}
  color: ${nokPalette.labelNeutral}; 

  gap: 8px;
`

export const GuildItemHeader = styled.header`
  display: flex;
  flex-direction: column;

  ${nokTypograpy.VITRO.Title2}

  > p {
    ${nokTypograpy.Pretendard.Body2.Medium};
    color: ${nokPalette.labelAlternative};
  }
`

