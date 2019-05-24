import React  from "react"
import styled from "styled-components";
import { Router, Link } from "@reach/router"


const StyledNavbar = styled.div`
    width: 100%;
    heigth: 30vh;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    background-color: #151d1b;
    font-size: 18px;
  a {
    color: #ffffff;
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
            <Link to="/products">Products</Link>
          </StyledNavbar>
        )
}

export default Navbar
