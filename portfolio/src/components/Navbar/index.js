import React  from "react"
import styled from "styled-components";
import { Router, Link } from "@reach/router"


const StyledNavbar = styled.div`
    width: 100%;
    heigth: 40vh;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    background-color: #1d191d;
    font-size: 18px;
  a {
    color: #ffffe5;
    text-decoration: none;
    font-weight: 700;
    font-size: 18px;
    margin: 0 10px;
  }
  @media screen and (max-width: 800px) {

  }
`;

const Navbar = () => {
        return (
          <StyledNavbar>
            <Link to="/">Home</Link>
            <Link to="/projects">Projects</Link>
          </StyledNavbar>
        )
}

export default Navbar
