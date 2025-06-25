import NokButton from "@src/components/common/ui/NokButton"
import { nokPalette } from "@src/constants/color/color.constants"
import { nokTypograpy } from "@src/constants/font/font.constants"
import { MainContentsBox } from "@src/styles/globalStyles"
import { useNavigate } from "react-router-dom"
import styled from "styled-components"

const NotFoundPage = () => {
  const nav = useNavigate();
  return (
    <NotFoundPageContainer>
      <p>404 NOT FOUND!</p>
      페이지를 찾지 못했습니다!
      <div>
        <NokButton text="홈으로" onClickFn={() => nav("/")} isFilled color={nokPalette.primaryNormal}/>
        <NokButton text="돌아가기" onClickFn={() => nav(-1)} isFilled/>
      </div>
    </NotFoundPageContainer>
  )
}

export const NotFoundPageContainer = styled(MainContentsBox)`
  justify-content: center;
  align-items: center;
  color: ${nokPalette.labelAlternative};
  ${nokTypograpy.Pretendard.Heading1.Medium};
  min-height: 720px;
  gap: 8px;
  
  p {
    ${nokTypograpy.VITRO.Extra1}
    color: ${nokPalette.labelNormal};
  }

  div {
    margin-top: 4px;
    width: 160px;
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
`
export default NotFoundPage