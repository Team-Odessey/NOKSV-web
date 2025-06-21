import Banner from "@src/components/common/Banner"
import Main from "@src/components/common/Main"
import styled from "styled-components"

const MainPage = () => {
  return (
    <MainPageContainer>
      <Banner/>
      <Main/>
    </MainPageContainer>
  )
}

const MainPageContainer = styled.main`
  display: flex;
  flex-direction: column;
  width: 100vw;
  min-height: 832px;
`
export default MainPage