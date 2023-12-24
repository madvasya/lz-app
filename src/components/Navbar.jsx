import React, { useState } from "react";
import { Logo } from "./Logo";
import {
  NavLinkWrapper,
  NavbarWrapper,
  StyledNavLink,
  StyledFontAwesomeIcon,
} from "../styles/Navbar.styled";
import { faBars } from "@fortawesome/free-solid-svg-icons";
export const Navbar = () => {
  const [active, setActive] = useState(false);
  const link = [
    {
      page: "Новости",
      href: "/",
    },
    { page: "О Лаборатории Звука", href: "/about" },
    { page: "Правила репбазы", href: "/rules" },
    { page: "Войти", href: "/login" },
  ];
  return (
    <NavbarWrapper>
      <Logo />
      <NavLinkWrapper active={active}>
          <StyledNavLink
            to="/booking"
          >
            Забронировать репетицию
          </StyledNavLink>
      </NavLinkWrapper>
      <StyledFontAwesomeIcon icon={faBars} onClick={() => setActive(!active)} />
      <NavLinkWrapper active={active}>
        {link.map((link) => (
          <StyledNavLink
            activeclassname="active"
            key={link.page}
            to={link.href}
          >
            {link.page}
          </StyledNavLink>
        ))}
      </NavLinkWrapper>
    </NavbarWrapper>
  );
};
