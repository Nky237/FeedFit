import { NavLink, Outlet} from 'react-router-dom'
import Logo from '../assets/Logo.svg'
import styled from 'styled-components'
import { Button } from '../Component/MyStyle.style'

const Navigation = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 40px;
`
const Nav = styled(Navigation)`
    width: 67%;
    @media(max-width: 500px){
        display: none;
    }
`
const NavLinkStyled = styled(NavLink)`
  color: black;
`;
const SideLayout = () => {
  return (
    <div>
        <Navigation>
            <div>
            <img src = {Logo} height = {100} width = {100} alt='logo' />
            </div>
            <Nav>
            <NavLinkStyled to = '/'>Home</NavLinkStyled>
            <NavLinkStyled to = '/menu'>Categories</NavLinkStyled>
            <NavLinkStyled to = '/prod'>Products</NavLinkStyled>
            <NavLinkStyled to = '/about'>About Us</NavLinkStyled>
            <NavLinkStyled to = '/price'>Pricing</NavLinkStyled>
           <NavLinkStyled to = '/sign'> <Button>Join Us </Button></NavLinkStyled>
            </Nav>
        </Navigation>
        <main>
            <Outlet />
        </main>
    </div>
  )
}

export default SideLayout