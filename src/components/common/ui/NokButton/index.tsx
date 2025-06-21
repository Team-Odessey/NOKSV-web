import { nokPalette } from "@src/constants/color/color.constants";
import { ReactElement } from "react";
import styled, { CSSObject } from "styled-components";

export interface NokButtonProps {
  width?: string;
  height?: string;
  color?: string;
  isFilled?: boolean;
  isTexted?: boolean;
  canInteract?: boolean;
  onClickFn?: () => void;
  icon?: ReactElement;
  text?: string;
  customStyle?: CSSObject;
}

const NokButton = ({
  width,
  height = "36px",
  color,
  isFilled = false,
  isTexted = false,
  canInteract = true,
  onClickFn = () => void(0),
  text,
  icon,
  customStyle
}: NokButtonProps) => {
  return (
    <NokHoverProvider
      $canInteract={canInteract.toString()}
      $isFilled={isFilled.toString()}
      $width={width}
      $height={height}
      $color={color}
      onClick={onClickFn}
    >
      <NokButtonContainer
        $customCSS={customStyle || {}}
        $isTexted={isTexted.toString()}
        $canInteract={canInteract.toString()}
        $isFilled={isFilled.toString()}
        $color={color}
      >
        {icon}
        {text}
      </NokButtonContainer>
    </NokHoverProvider>
  )
}

const NokHoverProvider = styled.button<{
  $canInteract: string;
  $isFilled: string;
  $color?: string;
  $width?: string;
  $height?: string;
}>`
  width: ${({ $width }) => $width || ""};
  height: ${({ $height }) => $height || "36px"};
  border: none;
  background-color: transparent;
  > :hover {
    background-color: ${({ $isFilled, $canInteract }) => $canInteract === "true" ? ($isFilled === "true" ? nokPalette.backgroundNeutral : nokPalette.fillAlternative) : ""};
    border: 1.5px solid ${({ $isFilled, $color, $canInteract }) => ($color && $canInteract === "false") ? $color : ($color && $isFilled === "false") ? $color : nokPalette.fillNormal};
  }
`

const NokButtonContainer = styled.div<{
  $color?: string;
  $canInteract: string;
  $isFilled: string;
  $isTexted: string;
  $customCSS: CSSObject;
}>`
  ${({$customCSS}) => $customCSS}
  transition: all 0.12s ease-in ;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  border: 1.5px solid ${({ $color, $isFilled }) => ($color && $isFilled === "true") ? $color : nokPalette.fillNormal};
  background-color: ${({ $color, $isFilled }) => ($color && $isFilled === "true") ? $color : $isFilled === "true" ? nokPalette.fillNormal : nokPalette.fillAlternative};
  width: 100%;
  height: 100%;
  cursor: ${({ $canInteract }) => $canInteract === "true" ? "pointer" : ""};
  padding: ${({ $isTexted }) => $isTexted === "true" ? "0 12px" : "0 20px"};
  gap: 12px;
  color: ${nokPalette.labelNormal};
  
`
export default NokButton