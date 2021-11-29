import React from "react";
import { NavLink } from "react-router-dom";
import styled from 'styled-components';


const NavMenuStyles = styled.div  `
    position: fixed;
    z-index: 100;
    top: 0;
    left: 0;
    width: 100%;
    padding: 1rem 0;
    background: lime;
`;


const NavMenu = () => {
  return (
    <NavMenuStyles>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/project">Projects</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contacts</NavLink>
        </li>
      </ul>
    </NavMenuStyles>
  );
};

export default NavMenu;
