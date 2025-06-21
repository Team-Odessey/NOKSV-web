import { nokPalette } from "@src/constants/color/color.constants";
import { nokTypograpy } from "@src/constants/font/font.constants";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const MenuModalContainer = styled.section`
  position: absolute;
  top: 60px;
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: 4px;
  border-radius: 4px;
  border: 1px solid ${nokPalette.lineNormal};
  width: 132px;
  background-color: ${nokPalette.backgroundNeutral};
  > :hover {
    background-color: ${nokPalette.fillNeutral};
  }
`

export const MenuModalButton = styled(Link)<{
  $isLocated: string;
}>`
  border: none;
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 0 8px;
  width: 100%;
  height: 32px;
  border-radius: 4px;
  background-color: ${({ $isLocated }) => $isLocated === "true" ? nokPalette.primaryNormal : "transparents"};
  color: ${nokPalette.labelNormal};
  text-decoration: none;
  ${nokTypograpy.Pretendard.Label.Bold}
`