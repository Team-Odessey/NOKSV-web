import { nokPalette } from "@src/constants/color/color.constants"
import { RankingHeader } from "@src/pages/RankingPage/style"
import { MainContentsBox } from "@src/styles/globalStyles"
import styled from "styled-components"
import { skeletonAnimtaion } from "../animation"

const RankingSkeleton = () => {
  return (
    <RankingSkeletonContainer>
      <RankingHeader>랭킹</RankingHeader>
      <div />
      <section>
        <p></p>
        <div />
        <div />
        <div />
        <div />
        <div />
      </section>
    </RankingSkeletonContainer>
  )
}

const RankingSkeletonContainer = styled(MainContentsBox)`
  height: 840px;
  width: 100vw;
  background-color: ${nokPalette.backgroundNormal};

  > div {
    width: 100%;
    min-height: 32px;
    border-radius: 8px;
    ${skeletonAnimtaion}
    ${nokPalette.backgroundNeutral}
  }

  > section {
    display: flex;
    flex-direction: column;
    gap: 4px;
    width: 100%;
    height: 100%;

    > p {
      width: 100%;
      height: 48px;
      border-radius: 8px;
      ${skeletonAnimtaion}
      ${nokPalette.backgroundNeutral}
    }
    > div {
      width: 100%;
      height: 72px;
      border-radius: 8px;
      ${skeletonAnimtaion}
      ${nokPalette.backgroundNeutral}
    }
  }
`
export default RankingSkeleton