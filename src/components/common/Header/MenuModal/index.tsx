import { MENU } from "@src/constants/menu.constants";
import * as S from "./style";
import { useLocation } from "react-router-dom";

const MenuModal = () => {
  const location = useLocation();
  return (
    <S.MenuModalContainer>
      {MENU.map((item) => (
        <S.MenuModalButton
          to={item.url}
          $isLocated={(location.pathname === item.url).toString()}
          key={item.text}
        >
          <item.icon width={16} height={16} />
          {item.text}
        </S.MenuModalButton>
      ))}
    </S.MenuModalContainer>
  );
};

export default MenuModal;
