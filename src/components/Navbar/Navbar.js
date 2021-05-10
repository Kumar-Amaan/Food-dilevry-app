import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import { Button } from "../../globalStyles";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  NavLogo1,
  NavLogo2,
  NavLogo3,
  NavIcon,
  NavIcon1,
  NavIcon2,
  NavIcon3,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavItemBtn,
  NavBtnLink,
  NavIcon4,
  NavLogo4,
} from "./Navbar.elements";

export const Navbar = () => {
  const [click, setClick] = useState(false);

  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);

  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);
  window.addEventListener("resize", showButton);

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <Nav>
          <NavbarContainer>
            <NavLogo to="/" onClick={closeMobileMenu}>
              <NavIcon />
              Case
            </NavLogo>

            <MobileIcon onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </MobileIcon>
            <NavMenu onClick={handleClick} click={click}>
              <NavItem>
                <NavLinks to="/">
                  <NavLogo3 to="/">
                    <NavIcon3 />
                    Home
                  </NavLogo3>
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="/myaccount">
                  <NavLogo1 to="/myaccount">
                    <NavIcon1 />
                    Account
                  </NavLogo1>
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="/cart">
                  <NavLogo2 to="/cart">
                    <NavIcon2 />
                    Cart
                  </NavLogo2>
                </NavLinks>
              </NavItem>

              <NavItem>
                <NavLinks to="/contacts">
                  <NavLogo4 to="/contacts">
                    <NavIcon4 />
                    Contact Us
                  </NavLogo4>
                </NavLinks>
              </NavItem>
              <NavItemBtn>
                {button ? (
                  <NavBtnLink to="/signup">
                    <Button primary>SIGN UP</Button>
                  </NavBtnLink>
                ) : (
                  <NavBtnLink to="/signup">
                    <Button fontBig primary>
                      SIGN UP
                    </Button>
                  </NavBtnLink>
                )}
              </NavItemBtn>
              <NavItemBtn>
                {button ? (
                  <NavBtnLink to="/login">
                    <Button primary>Log In</Button>
                  </NavBtnLink>
                ) : (
                  <NavBtnLink to="/login">
                    <Button fontBig primary>
                      Log In
                    </Button>
                  </NavBtnLink>
                )}
              </NavItemBtn>
            </NavMenu>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
};
