import { nokPalette } from "@src/constants/color/color.constants";
import { nokTypograpy } from "@src/constants/font/font.constants";
import { MainContentsBox } from "@src/styles/globalStyles";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const LoginContainer = styled(MainContentsBox)`
  justify-content: center;
  align-items: center;

  color: ${nokPalette.labelNormal};
  ${nokTypograpy.VITRO.Extra2};
  min-height: 760px;
`

export const LoginToSignUpLink = styled(Link)`
  color: ${nokPalette.labelAlternative};
  ${nokTypograpy.Pretendard.Caption1.Medium}
`