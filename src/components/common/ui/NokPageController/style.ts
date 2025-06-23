import { nokPalette } from "@src/constants/color/color.constants";
import { nokTypograpy } from "@src/constants/font/font.constants";
import styled from "styled-components";

export const NokPageControllerContainer = styled.section`
  display: flex;
  width: 100%;
  height: 32px;
  gap: 8px;
  justify-content: center;

  > :hover {
    background-color: ${nokPalette.primaryAlternative};
    color: ${nokPalette.labelNormal};
  }
`

export const NokPageControllerButton = styled.button<{
  $isActive: string;
  $isVisible: string;
}>`
  display: flex;
  visibility: ${({ $isVisible }) => $isVisible === "true" ? "hidden" : ""};
  width: 48px;
  height: 32px;

  border-radius: 4px;
  justify-content: center;
  align-items: center;
  color: ${({ $isActive }) => $isActive === "true" ? nokPalette.labelNormal : nokPalette.labelAssistive};
  ${nokTypograpy.Pretendard.Body1.Bold};
  background-color: ${({ $isActive }) => $isActive === "true" ? nokPalette.primaryNormal : nokPalette.fillAlternative};
  border: 1px solid ${({ $isActive }) => $isActive === "true" ? nokPalette.primaryNormal : nokPalette.lineAlternative};
`