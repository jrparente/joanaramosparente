import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Toggle from "./Theme/Toggler";
import { Container } from "./Theme/Utils";

const Header = styled.header`
  width: 100%;
  transition: all 0.5s linear;
  background-color: ${({ theme }) => theme.body};
  position: sticky;
  z-index: 10;
  top: 0;
  backdrop-filter: saturate(180%) blur(20px);
`;

const Nav = styled.nav`
  display: flex;
  width: 100%;
  gap: 1rem;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 0;
  transition: all 0.5s linear;
  @media (min-width: 35rem) {
    padding: 1rem;
  }
`;

const NavMobileToggle = styled.button`
  display: none;
  cursor: pointer;
  background: transparent;
  border: 0;
  width: 2.25rem;
  height: 2.25rem;
  align-items: center;
  @media (max-width: 35rem) {
    display: grid;
    z-index: 9999;
    place-content: center;
  }
`;

const MenuUL = styled.ul`
  display: flex;
  list-style: none;
  padding-left: 0;
  margin-left: -2rem;
  gap: 1rem;
  @media (max-width: 35rem) {
    transform: translateX(100%);
    margin-left: 0;
    height: 100vh;
    flex-direction: column;
    position: fixed;
    inset: 3rem 0 0 0;
    background-color: ${({ theme }) => theme.body};
    padding: 2em;
    align-items: center;
    z-index: 9999;
    transition: transform 500ms ease-in-out;
    &[menu-visible] {
      transform: translateX(0);
    }
  }
`;

const StyledNavLink = styled(NavLink)`
  font-family: "League Spartan", sans-serif;
  font-weight: 300;
  font-size: 1.5rem;
  text-decoration: none;
  text-transform: uppercase;
  color: ${({ theme }) => theme.text};
  padding: 0.5rem 1rem;
  border-radius: 5px;
  &:active,
  &.active,
  &:focus {
    color: ${({ theme }) => theme.accent};
    font-weight: 500;
  }
  &:hover {
    background-color: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.text};
  }
`;

const MobileMenuTogglerIcon = styled.svg`
  path {
    fill: ${({ theme }) => theme.text};
  }
  &:hover {
    path {
      fill: ${({ theme }) => theme.accent};
    }
  }
`;

export default function Navigation(props) {
  return (
    <>
      <Header>
        <Container>
          <Nav>
            <NavMobileToggle
              aria-controls="primary-nav"
              aria-expanded="false"
              onClick={props.changeShow}
            >
              {props.showMobileMenu ? (
                <MobileMenuTogglerIcon
                  x="0px"
                  y="0px"
                  viewBox="0 0 1000 1000"
                  width="30"
                  title="cross"
                  aria-hidden="true"
                >
                  <g>
                    <path d="M617.2,495.8l349.1,350.9c31.7,31.8,31.7,83.5,0,115.3c-31.7,31.9-83.1,31.9-114.8,0L502.4,611.2L149.8,965.6c-32,32.2-83.8,32.2-115.8,0c-32-32.1-32-84.3,0-116.4l352.6-354.5L48.2,154.6c-31.7-31.9-31.7-83.5,0-115.4c31.7-31.9,83.1-31.9,114.7,0l338.4,340.2l343.3-345c32-32.1,83.8-32.1,115.8,0c32,32.2,32,84.3,0,116.4L617.2,495.8z" />
                  </g>
                </MobileMenuTogglerIcon>
              ) : (
                <MobileMenuTogglerIcon
                  viewBox="0 0 448 512"
                  width="30"
                  title="bars"
                  aria-hidden="true"
                >
                  <path d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z" />
                </MobileMenuTogglerIcon>
              )}

              <span className="sr-only">Menu</span>
            </NavMobileToggle>
            <MenuUL id="primary-nav" aria-label="primary-nav">
              <li>
                <StyledNavLink to="/" onClick={props.changeShow}>
                  Home
                </StyledNavLink>
              </li>
              <li>
                <StyledNavLink to="/about" onClick={props.changeShow}>
                  About
                </StyledNavLink>
              </li>
              <li>
                <StyledNavLink to="/projects" onClick={props.changeShow}>
                  Projects
                </StyledNavLink>
              </li>
              <li>
                <StyledNavLink to="/contact" onClick={props.changeShow}>
                  Contact
                </StyledNavLink>
              </li>
            </MenuUL>
            <Toggle theme={props.theme} toggleTheme={props.themeToggler} />
          </Nav>
        </Container>
      </Header>
    </>
  );
}
