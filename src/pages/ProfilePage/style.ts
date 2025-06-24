import { nokPalette } from "@src/constants/color/color.constants";
import { nokTypograpy } from "@src/constants/font/font.constants";
import { MainContentsBox } from "@src/styles/globalStyles";
import styled from "styled-components";

export const ProfilePageContainer = styled(MainContentsBox)`
  color: ${nokPalette.labelNormal};
  ${nokTypograpy.VITRO.Extra2};

  > section {
    display: flex;
    gap: 12px;
    width: 100%;

    > aside {
      display: flex;
      flex-direction: column;
      gap: 12px;
      flex-grow: 1;
    }
  }
`

export const ProfilePageUserInfo = styled.div`
  display: flex;
  gap: 16px;
  padding: 16px;
  background-color: ${nokPalette.backgroundNeutral};
  border-radius: 4px;

  > img {
    width: 108px;
    height: 108px;
    border-radius: 4px;
  }

  > section {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 8px 0;

    ${nokTypograpy.VITRO.Body2};
    color: ${nokPalette.labelNormal};
    > div {
      display: flex;
      flex-direction: column;
      ${nokTypograpy.Pretendard.Headline.Medium}
      color: ${nokPalette.labelAlternative};
      > p {
        color: ${nokPalette.labelNormal};
        ${nokTypograpy.VITRO.Title3};
      }
    }
  }
`

export const ProfileNotfound = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 440px;
  color: ${nokPalette.labelNormal};
  ${nokTypograpy.Pretendard.Heading2.Bold}
`

export const ProfileStat = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;
  ${nokTypograpy.VITRO.Title2}
  color: ${nokPalette.labelAlternative};
  background-color: ${nokPalette.backgroundNeutral};
  padding: 16px;
`

export const ProfileStatItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  ${nokTypograpy.VITRO.Heading2}
  color: ${nokPalette.primaryNormal};
  > p {
    ${nokTypograpy.Pretendard.Heading2.Medium}
    color: ${nokPalette.labelNormal};
  }
`

export const ProfileRankContainer = styled(ProfileStat)`
  width: 300px;
  min-width: 300px;
`

export const ProfileRankItem = styled.div`
  display: flex;
  padding: 0 8px;
  justify-content: space-between;
  align-items: center;

  ${nokTypograpy.Pretendard.Headline.Medium};
  color: ${nokPalette.labelNormal};

  > div {
    display: flex;
    gap: 16px;
    align-items: center;
    > img {
      width: 56px;
      height: 56px;
    }

    > div {
      ${nokTypograpy.Pretendard.Body1.Medium};
      color: ${nokPalette.labelAlternative};
    }
  }
`

export const ProfileRankNumber = styled.p<{
  $isBold: string;
}>`
  ${nokTypograpy.Pretendard.Headline.Bold};
  color: ${({ $isBold }) => $isBold === "true" ? nokPalette.primaryNormal : nokPalette.labelNormal};
`

export const ProfileRecordContainer = styled(ProfileStat)`
  gap: 8px;
  padding: 16px;
  min-width: 240px;
  width: 240px;
`

export const ProfileRecordItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  ${nokTypograpy.Pretendard.Label.Regular};
  color: ${nokPalette.labelAlternative};

  p {
    ${nokTypograpy.Pretendard.Headline.Bold};
    color: ${nokPalette.labelNormal};
  }
`