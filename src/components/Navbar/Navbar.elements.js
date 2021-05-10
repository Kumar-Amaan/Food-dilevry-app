import styled from "styled-components";
import { Container } from "../../globalStyles";
import { GiAbstract042 } from "react-icons/gi";
import { FaUserSecret, FaOpencart, FaHome } from "react-icons/fa";
import { RiContactsFill } from "react-icons/ri";

import { Link } from "react-router-dom";
export const Nav = styled.nav`
  background: #101522;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  position: sticky;
  top: 0;
  z-index: 999;
`;

export const NavbarContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  height: 80px;

  ${Container}
`;

export const NavLogo = styled(Link)`
  color: yellow;
  justify-self: flex-start;
  cursor: pointer;
  text-decoration: none;
  font-size: 2rem;
  display: flex;
  align-items: center;
`;

export const NavIcon = styled(GiAbstract042)`
  margin-right: 0.5;
`;

export const NavLogo1 = styled(Link)`
  color: yellow;
  /* justify-self: flex-start;
   */
  position: relative;
  right: 5px;
  top:8px;
  cursor: pointer;
  text-decoration: none;
  font-size: 1rem;
  display: flex;
  align-items: center;
`;
export const NavIcon1 = styled(FaUserSecret)`
  margin-right: 0.5px;
`;
export const NavLogo2 = styled(Link)`
  color: yellow;
  /* justify-self: flex-start; */
  position: relative;
  right: 5px;
  top:8px;
  cursor: pointer;
  text-decoration: none;
  font-size: 1rem;
  display: flex;
  align-items: center;
`;
export const NavIcon2 = styled(FaOpencart)`
  margin-right: 0.5px;
`;
export const NavLogo3 = styled(Link)`
  color: yellow;
  /* justify-self: flex-start; */
  position: relative;
  right: 5px;
  top:8px;
  cursor: pointer;
  text-decoration: none;
  font-size: 1rem;
  display: flex;
  align-items: center;
`;
export const NavIcon3 = styled(FaHome)`
  margin-right: 0.5;
`;
export const NavLogo4 = styled(Link)`
  color: yellow;
  /* justify-self: flex-start; */
  position: relative;
  right: 5px;
  top:8px;
  cursor: pointer;
  text-decoration: none;
  font-size: 1rem;
  display: flex;
  align-items: center;
`;
export const NavIcon4 = styled(RiContactsFill)`
  margin-right: 0.5;
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 960px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;

  @media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 90vh;
    position: absolute;
    top: 80px;
    left: ${({ click }) => (click ? 0 : "-100%")};
    opacity: 1;
    transition: all 0.5s ease;
    background: #101522;
  }
`;

export const NavItem = styled.li`
  height: 80px;
  border-bottom: 2px solid transparent;

  &:hover {
    border-bottom: 2px solid #4b59f7;
  }

  @media screen and (max-width: 960px) {
    width: 100%;

    &:hover {
      border: none;
    }
  }
`;

export const NavLinks = styled(Link)`
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;
  padding: 1.5rem 1rem;
  height: 100%;

  @media screen and (max-width: 960px) {
    text-align: center;
    padding: 2rem;
    width: 100%;
    display: flex;

    &:hover {
      color: blue;
      transition: all 0.4s ease;
    }
  }
`;

export const NavItemBtn = styled.li`
  @media screen and (max-width: 960px) {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 120px;
  }
`;

export const NavBtnLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  padding: 8px 16px;
  height: 100%;
  width: 100%;
  border: none;
  outline: none;
`;
