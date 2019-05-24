import React  from "react"
import styled from "styled-components";

const StyledHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  background-color: #ffffff;
  width: 100%;
  color: #1d191d;
  header h1 {
    color: #c99590;
    font-size: 60px;
  }

  @media screen and (max-width: 800px) {

  }
`;

const Header = () => {
        return (
          <StyledHeader>
            <header>
              <h1>Welcome</h1>
              <h3>I`m Ida Hallner a web developer student at Yrgo guthenburg.</h3>
            </header>
          </StyledHeader>
        )
}

export default Header
