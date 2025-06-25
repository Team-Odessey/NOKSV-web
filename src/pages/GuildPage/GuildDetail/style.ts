import { nokPalette } from "@src/constants/color/color.constants";
import { nokTypograpy } from "@src/constants/font/font.constants";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const GuildDetailHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${nokPalette.labelNormal};
  ${nokTypograpy.VITRO.Extra2}
`

export const GuildInfoContainer = styled.div`
  display: flex;
`

export const GuildInfoItem = styled.section`
  display: flex;
  flex-direction: column;
  min-width: 200px;
  gap: 12px;
  padding: 0 32px 0 20px;
  justify-content: center;
  border-left: 2px solid ${nokPalette.lineNormal};
  color: ${nokPalette.labelNormal};

  > div {
    display: flex;
    flex-direction: column;
    ${nokTypograpy.Pretendard.Headline.Medium};
    p {
      ${nokTypograpy.Pretendard.Body2.Bold};
      color: ${nokPalette.labelAlternative};
    }
  }
`;

export const GuildProfile = styled.div`
  display: flex;
  width: 440px;
  gap: 20px;
  align-items: center;
`

export const GuildImgContainer = styled.div`
  padding: 12px;
  border: 1px solid ${nokPalette.lineNormal};
  background-color: ${nokPalette.fillAlternative};
  border-radius: 8px;

  img { 
    width: 108px;
    height: 108px;
  }
`

export const GuildProfileData = styled.section`
  display: flex;
  flex-direction: column;
  color: ${nokPalette.labelNormal};
  ${nokTypograpy.VITRO.Extra2};

  > section {
    color: ${nokPalette.labelAlternative};
    ${nokTypograpy.Pretendard.Heading1.Medium}
    display: flex;
    flex-direction: column;
  }

  > span {
    margin-top: 4px;
    ${nokTypograpy.Pretendard.Heading1.Regular}
    color: ${nokPalette.labelAssistive};
    > strong {
      ${nokTypograpy.Pretendard.Heading1.Bold};
      color: ${nokPalette.labelNormal};
    }
  }
`

export const GuildMemberLink = styled(Link)`
  text-decoration: none;
  color: ${nokPalette.labelNormal};
  display: inline;
`