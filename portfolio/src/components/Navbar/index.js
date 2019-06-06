import React  from "react";
import styled from "styled-components";
import { Link } from "@reach/router";


const StyledNavbar = styled.div`
  width: 100%;
  height: 10vh;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  background-color: #ffffff;
  font-size: 18px;

  a {
    color: #1d191d;
    text-decoration: none;
    font-weight: 700;
    font-size: 18px;
    margin: 0 10px;
  }

  @media screen and (max-width: 800px) {
    display: none;
  }
`;

const Navbar = () => {
  return (
    <StyledNavbar>
      <Link to="/">Home</Link>
      <Link to="/projects">Projects</Link>
      <Link to="/contact">Contact</Link>
    </StyledNavbar>
  )
}

export default Navbar
