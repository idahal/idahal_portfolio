import React  from "react";
import styled from "styled-components";
import { Link } from "@reach/router";


const StyledNavbar = styled.div`
  width: 100%;
  height: 15vh;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  background-color: #ffffff;
  font-size: 1.3rem;

  a {
    color: #1d191d;
    text-decoration: none;
    font-weight: 700;
    font-size: 1.5rem;
    margin: 0 2%;
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
