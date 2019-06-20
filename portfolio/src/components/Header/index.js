import React  from "react"
import styled from "styled-components";
import profile_picture from '../../../src/images/profile_picture.png';

const StyledHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  background-color: #e0cbbd;
  width: 100%;
  color: #1d191d;

  header h1 {
    font-size: 6rem;
    margin: 2% 0 2% 0;
    }

    header h3 {
      font-size: 1.5rem;
    }

  .profileImage {
    height: 15rem;
    width: 15rem;
    border-radius: 50%;
    display: flex;
    margin: auto;
    }

  @media screen and (max-width: 800px) {
    text-align: center;

    header h1 {
      font-size: 4rem;
      text-align: left;
      margin: 10% 0% 2% 5%;

    }

    header h3 {
      padding: 5%;
    }
  }
`;

const Header = () => {
    return (
      <StyledHeader>
        <header>
          <h1>Hello.</h1>
          <img src={profile_picture} className="profileImage" alt="profile_image" />
          <h3>I`m Ida Hallner a web developer student at Yrgo gothenburg.</h3>
          </header>
      </StyledHeader>
    )
  }

export default Header
