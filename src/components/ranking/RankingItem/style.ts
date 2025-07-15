import styled from "styled-components";
import { nokPalette } from "@src/constants/color/color.constants";
import { nokTypograpy } from "@src/constants/font/font.constants";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  height: 72px;
  background: none;

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
`;

export const Rank = styled.div`
  width: 64px;
  flex-shrink: 0;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  ${nokTypograpy.Pretendard.Heading1.Medium};
  color: ${nokPalette.labelNormal};
  letter-spacing: -0.44px;
`;


export const UserInfo = styled.div`
  display: flex;
  align-items: center;
  width: 200px;
  flex-shrink: 0;
  height: 100%;
  padding: 0 24px;
  gap: 8px;
  > img {
    width: 36px;
    height: 36px;
    border-radius: 4px;
  }

  > div {
    display: flex;
    flex-direction: column;

    > p {
      ${nokTypograpy.Pretendard.Headline.Bold};
      color: ${nokPalette.labelNormal};
    }
    > span { 
      ${nokTypograpy.Pretendard.Caption2.Medium};
      color: ${nokPalette.labelAlternative};
    }
  }
`;

export const UserDetailItem = styled.div`
  width: 144px;
  height: 100%;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  ${nokTypograpy.Pretendard.Headline.Medium};
  color: ${nokPalette.labelNormal};
`;

export const Playtime = styled.div`
  width: 120px;
  height: 100%;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  ${nokTypograpy.Pretendard.Headline.Medium};
  color: ${nokPalette.labelNormal};

  @media (max-width: 1000px) {
    display: none;
  }
`; 