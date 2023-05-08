import { NavLink, Outlet} from 'react-router-dom'
import Logo from '../assets/Logo.svg'
import styled from 'styled-components'
import { Button } from '../Component/MyStyle.style'
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineClose } from 'react-icons/md';
import { useState } from 'react'


interface Navyoo {
  show: boolean;
}
const Navigation = styled.nav`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 40px;
    
`
const MobileNav = styled.div<Navyoo>`
  display: ${props => props.show ? 'flex' : 'none'};
  flex-direction: column;
  align-items: center;
  height: 100vh;
  gap: 50px;
  @media(min-width: 760px){
    display: none;
  }
`;

const Nav = styled(Navigation)`
    width: 67%;
    @media(max-width: 700px){
        display: none;
    }
`
const NavLinkStyled = styled(NavLink)`
  color: black;
`;
const Ham = styled.div`
display: none;
@media(max-width: 760px){
  display: block;
  font-size: 35px;
}
`

const SideLayout = () => {
  const [showNavbar, setShowNavbar] = useState(false)

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar)
  }

  return (
    <div>
      <Navigation>
        <div>
          <img src={Logo} height={100} width={100} alt='logo' />
        </div>
        <Ham onClick={handleShowNavbar}>
          {showNavbar ? <MdOutlineClose /> :<GiHamburgerMenu />}
        </Ham>
        <Nav>
          <NavLinkStyled to='/' >Home</NavLinkStyled>
          <NavLinkStyled to='/menu' >Categories</NavLinkStyled>
          <NavLinkStyled to='/prod' >Products</NavLinkStyled>
          <NavLinkStyled to='/about' >About Us</NavLinkStyled>
          <NavLinkStyled to='/price' >Pricing</NavLinkStyled>
          <NavLinkStyled to='/sign' > <Button>Join Us </Button></NavLinkStyled>
        </Nav>
      </Navigation>
      <MobileNav show={showNavbar}>
        <NavLinkStyled to='/' onClick={handleShowNavbar}>Home</NavLinkStyled>
        <NavLinkStyled to='/menu' onClick={handleShowNavbar}>Categories</NavLinkStyled>
        <NavLinkStyled to='/prod' onClick={handleShowNavbar}>Products</NavLinkStyled>
        <NavLinkStyled to='/about' onClick={handleShowNavbar}>About Us</NavLinkStyled>
        <NavLinkStyled to='/price' onClick={handleShowNavbar}>Pricing</NavLinkStyled>
        <NavLinkStyled to='/sign' onClick={handleShowNavbar}> <Button>Join Us </Button></NavLinkStyled>
      </MobileNav>
      <main>
        <Outlet />
      </main>
    </div>
  )
}
export default SideLayout