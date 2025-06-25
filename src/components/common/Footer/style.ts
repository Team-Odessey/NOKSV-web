import { nokPalette } from "@src/constants/color/color.constants";
import { nokTypograpy } from "@src/constants/font/font.constants";
import styled from "styled-components";

export const FooterContainer = styled.footer`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100vw;
  justify-content: center;
  align-items: center;
  padding: 32px 0;
  color: ${nokPalette.labelAlternative};
  > p {
    ${nokTypograpy.Pretendard.Heading1.Bold}
  }
`