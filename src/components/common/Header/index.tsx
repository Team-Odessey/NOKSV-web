import NokButton from "@src/components/common/ui/NokButton"
import { nokPalette } from "@src/constants/color/color.constants"
import { nokTypograpy } from "@src/constants/font/font.constants"
import styled from "styled-components"
import Profile from "@src/assets/icons/profile.svg?react"
import { useState } from "react"
import MenuModal from "@src/components/common/Header/MenuModal"
import { Link } from "react-router-dom"

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <HeaderContainer>
      <NokButton width="132px" text="메뉴" onClickFn={() => setIsMenuOpen(prev => !prev)}/>
      {isMenuOpen && <MenuModal/>}
      <Link to={'/'}>NOK</Link>
      <NokButton width="132px" icon={<Profile width={20} height={20}/>}/>
    </HeaderContainer>
  )
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