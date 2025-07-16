import NokButton from "@src/components/common/ui/NokButton"
import { nokPalette } from "@src/constants/color/color.constants"
import { nokTypograpy } from "@src/constants/font/font.constants"
import styled from "styled-components"
import { useEffect, useState } from "react"
import MenuModal from "@src/components/common/Header/MenuModal"
import { Link, useLocation, useNavigate } from "react-router-dom"
import token from "@src/libs/token/token"

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const nav = useNavigate();
  const [isToken, setIsToken] = useState(token.getToken("access-token"));
  const loc = useLocation();

  useEffect(() => {
    setIsToken(token.getToken("access-token"))
  }, [loc.pathname])

  return (
    <HeaderContainer>
      <NokButton
        width="132px"
        text="메뉴"
        onClickFn={() => setIsMenuOpen((prev) => !prev)}
        isFilled
      />
      {isMenuOpen && <MenuModal />}
      <Link to={"/"}>NOK</Link>
      <NokButton
        isFilled
        width="132px"
        text={isToken ? "프로필" : "로그인하기"}
        onClickFn={() => nav(isToken ? `/profile` : "/login")}
      />
    </HeaderContainer>
  );
}

const HeaderContainer = styled.header`
  position: relative;
  display: flex;
  width: 100vw;
  height: 72px;
  padding: 0 108px;

  justify-content: space-between;
  align-items: center;

  background-color: ${nokPalette.backgroundNeutral};

  > a {
    user-select: none;
    color: ${nokPalette.labelNormal};
    ${nokTypograpy.VITRO.Title1};
    text-decoration: none;
  }
`

export default Header