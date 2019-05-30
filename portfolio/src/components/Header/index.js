import React  from "react"
import styled from "styled-components";

const StyledHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  background-color: #e0cbbd;
  width: 100%;
  height: 85vh;
  color: #1d191d;
  header h1 {
    font-size: 90px;
  }
  @media screen and (max-width: 800px) {
  }
`;

const Header = () => {
        return (
          <StyledHeader>
            <header>
              <h1>Hello.</h1>
              <h3>I`m Ida Hallner a web developer student at Yrgo gothenburg.</h3>
            </header>
          </StyledHeader>
        )
}
export default Header
