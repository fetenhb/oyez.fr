import React, { useState, Fragment } from "react";
import styled from "styled-components";

import { FaBars } from "react-icons/fa";

import "../../App.css";
import logo from "../../Images/logo-oyez.gif";

const Nav = styled.nav`
  position: fixed !important;
  background: transparent;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  /* Fix your navbar by using below two lines of code */
  position: sticky;
  top: 0;
  /* Fix your navbar by using above two lines of code */
  z-index: 10;
  margin-left: 50px;
  margin-right: 30px;
  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`;

const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  width: 100%;
`;

const NavLogo = styled.a`
  justify-self: flex-start;
  cursor: pointer;

  display: flex;
  align-items: center;
`;
const ImgLogo = styled.img`
  height: 60px;
`;

const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

const NavMenu = styled.div`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-right: -22px;

  @media screen and (max-width: 960px) {
    display: none;
  }
`;

const NavItem = styled.li`
  height: 80px;
`;

const NavLinks = styled.a`
  color: #808080;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  &.active {
    color: #000000;
  }
`;

const Navbar = () => {
  const [colorChange, setColorchange] = useState(false);
  const changeNavbarColor = () => {
    if (window.scrollY >= 80) {
      setColorchange(true);
    } else {
      setColorchange(false);
    }
  };
  window.addEventListener("scroll", changeNavbarColor);
  return (
    <Fragment>
      <Nav className={colorChange ? "navbar colorChange" : "navbar"}>
        <NavContainer>
          <NavLogo href="#">
            <ImgLogo src={logo} />
          </NavLogo>
          <MobileIcon>
            <FaBars />
          </MobileIcon>
          {/* <NavMenu>
            <NavItem>
              <NavLinks href="#">About</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks href="#">Services</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks href="#">Events</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks href="#">Contact</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks href="#">Sign In</NavLinks>
            </NavItem>
          </NavMenu> */}
        </NavContainer>
      </Nav>
    </Fragment>
  );
};

export default Navbar;
