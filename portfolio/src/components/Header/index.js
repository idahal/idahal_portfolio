import React  from "react"
import styled from "styled-components";
import profile_picture from './profile_picture.jpg';

const StyledHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  background-color: #e0cbbd;
  width: 100%;
  height: 75vh;
  color: #1d191d;

  header h1 {
    font-size: 90px;
    margin-bottom: 2%;
    }

  .profileImage {
    height: 30%;
    width: 30%;
    border-radius: 50%;
    display: flex;
    margin: auto;
    }

  @media screen and (max-width: 800px) {
    text-align: center;

    header h1 {
      font-size: 70px;
      margin-left: 5%;
      text-align: left;
    }

    header h3 {
      padding: 5%;
    }

    .profileImage {
      height: 30%;
      width: 40%;
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
