// Navbar.jsx - панель навигации
import React, { useState } from "react";
import { Logo } from "./Logo";
import {
  NavLinkWrapper,
  NavbarWrapper,
  StyledNavLink,
  StyledNavButton,
  StyledFontAwesomeIcon,
} from "../styles/Navbar.styled";
import { faBars } from "@fortawesome/free-solid-svg-icons";
export const Navbar = () => {
  const [active, setActive] = useState(false);
  const link = [
    { page: "Новости", href: "/" },
    { page: "О Лаборатории Звука", href: "/about" },
    { page: "Правила репбазы", href: "/rules" },
  ];
  return (
    <NavbarWrapper>
      <Logo />
      <StyledFontAwesomeIcon icon={faBars} onClick={() => setActive(!active)} />
      <NavLinkWrapper active={active}>
        <StyledNavButton to="/booking">Забронировать репетицию</StyledNavButton>
        {link.map((link) => (
          <StyledNavLink
            activeclassname="active"
            key={link.page}
            to={link.href}
          >
            {link.page}
          </StyledNavLink>
        ))}
        <StyledNavButton to="/login">Войти</StyledNavButton>
      </NavLinkWrapper>
    </NavbarWrapper>
  );
};
