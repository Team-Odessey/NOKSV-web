import styled from "styled-components";
import { nokPalette } from "@src/constants/color/color.constants";
import { nokTypograpy } from "@src/constants/font/font.constants";

export const Container = styled.button<{ $selected: string }>`
  background: ${({ $selected }) => $selected === "true" ? nokPalette.primaryNormal : "rgba(255,255,255,0.04)"};
  border: ${({ $selected }) => $selected === "false" ? "none" : `1px solid ${nokPalette.lineAlternative}`};
  border-radius: 8px;
  height: 32px;
  padding: 0 12px;
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const Label = styled.span`
  ${nokTypograpy.Pretendard.Label.Bold};
  font-size: 16px;
  color: ${nokPalette.labelNormal};
  letter-spacing: 0.16px;
`; 