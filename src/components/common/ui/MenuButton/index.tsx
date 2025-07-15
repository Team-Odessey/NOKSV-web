import React from "react";
import * as S from './style';

type MenuButtonProps = {
  children: React.ReactNode;
  selected?: boolean;
  onClick?: () => void;
};

const MenuButton = ({ children, selected = false, onClick }: MenuButtonProps) => (
  <S.Container $selected={selected.toString()} onClick={onClick}>
    <S.Label>{children}</S.Label>
  </S.Container>
);

export default MenuButton; 