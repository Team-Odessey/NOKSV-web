import { nokPalette } from "@src/constants/color/color.constants";
import styled, { createGlobalStyle } from "styled-components";
// import reset from "styled-reset";
export const GlobalStyles = createGlobalStyle`
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    a {
      text-decoration: none;
    }
    
    @font-face {
      font-family: "VITRO INSPIRE OTF";
      src:url('./src/constants/font/VITRO\ INSPIRE\ OTF.otf')format('opentype')
    }
`;

export const MainContentsBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 64px 108px;
  background-color: ${nokPalette.backgroundNormal};
  width: 100vw;
  min-height: 832px;
`