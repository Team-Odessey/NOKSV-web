import styled from "styled-components";
import { nokPalette } from "@src/constants/color/color.constants";
import { nokTypograpy } from "@src/constants/font/font.constants";

export const RankingHeader = styled.h1`
  ${nokTypograpy.VITRO.Extra2};
  color: ${nokPalette.labelNormal};
`;


export const RankingItemHeader = styled.div`
  display: flex;
  width: 100%;
  height: 48px;
  border-bottom: 1px solid ${nokPalette.lineNormal};

  color: ${nokPalette.labelNormal};
  ${nokTypograpy.Pretendard.Headline.Medium}

  @media (max-width: 870px) {
    :nth-child(5) {
      display: none;
    }
  }
  
  @media (max-width: 720px) {
    :nth-child(4) {
      display: none;
    }
  }
`