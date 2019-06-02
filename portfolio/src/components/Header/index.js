import React  from "react"
import styled from "styled-components";
import profile_picture from './profile_picture.jpg';


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
    margin-bottom: 0;
  }
  hr {
   margin: inherit;
   text-decoration: none;
   width: 40%;
   border: 2px #1d191d solid;
   margin-bottom: 5%;
  }

  .profileImage {
    width: 30%;
    height: 30%;
    border-radius: 4px;
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
    hr {
    display:none;
    }
    .profileImage {
      width: 40%;
      height: 30%;
      border-radius: 4px;
      display: flex;
      margin: auto;
    }
  }
`;

const Header = () => {
        return (
          <StyledHeader>
            <header>
              <h1>Hello.</h1>
              <hr></hr>
              <img src={profile_picture} className="profileImage" alt="profile_image" />
              <h3>I`m Ida Hallner a web developer student at Yrgo gothenburg.</h3>
            </header>
          </StyledHeader>
        )
}
export default Header
