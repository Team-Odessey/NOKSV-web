import styled from "styled-components"
import Header from "../Header"
import Footer from "../Footer"
import { Outlet } from "react-router-dom"

const Layout = () => {
  return (
    <LayoutContainer>
      <Header/>
      <Outlet/>
      <Footer/>
    </LayoutContainer>
  )
}

const LayoutContainer = styled.section`
  display: flex;
  flex-direction: column;
  width: 100vw;
`

export default Layout