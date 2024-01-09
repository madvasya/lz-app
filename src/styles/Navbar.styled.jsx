// Navbar.styled.jsx - описание стиля навигационной панели
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const LogoImg = styled.img`
  align-self: start;
  width: 50px;
`;

const NavbarWrapper = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #000;
  padding: 1rem 3rem;
  position: relative;
  @media (max-width: 970px) {
    flex-direction: column;
    padding: 1rem;
  }
`;

const NavLinkWrapper = styled.div`
  @media (max-width: 970px) {
    display: ${(props) => (props.active ? "block" : "none")};
    text-align: center;
    padding: 2rem 0;
  }
`;

const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  transition: 0.2s;
  color: white;
  margin-left: 2rem;

  &.${(props) => props.activeclassname} {
    color: #007dfc;
  }

  &:hover {
    color: #007dfc;
  }

  @media (max-width: 970px) {
    display: block;
    margin: 2rem auto;
  }
`;

const StyledNavButton = styled(NavLink)`
  text-decoration: none;
  transition: 0.2s;
  color: white;
  margin-left: 2rem;
  background: #007dfc;
  padding: 0.5rem 1rem;
  border-radius: 30px;
  &:hover {
    color: white;
  }
  &.${(props) => props.activeclassname} {
    color: white;
  }

  @media (max-width: 970px) {
    display: block;
    margin: 2rem auto;
  }
`;

const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
  display: none;
  position: absolute;
  right: 20px;
  top: 21px;
  color: white;
  font-size: 1.8rem;
  cursor: pointer;
  @media (max-width: 970px){
    display: block;
  }
  };
`;

export {
  LogoImg,
  NavbarWrapper,
  NavLinkWrapper,
  StyledNavLink,
  StyledNavButton,
  StyledFontAwesomeIcon,
};
