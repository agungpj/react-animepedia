import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

function Header() {
  const dispatch = useDispatch();
  const clearSearched = () => {
    dispatch({ type: "CLEAR_SEARCHED" });
  };
  return (
    <Nav onClick={clearSearched}>
      <Link to='/'>
        <Logo>WIBUPEDIA</Logo>
      </Link>
    </Nav>
  );
}

export default Header;

const Nav = styled.nav`
  height: 70px;
  width: 100%;
  background: #1a1a1a;
  align-items: center;
  padding: 0 36px;

  overflow-x: hidden;
  display: flex;

  position: fixed;
  z-index: 1;
`;

const Logo = styled.h1`
  color: white;
  text-decoration: none;
`;
