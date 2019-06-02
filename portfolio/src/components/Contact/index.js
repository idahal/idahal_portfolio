import React  from "react"
import styled from "styled-components";
import github from './github.svg';
import facebook from './facebook.svg';
import linkedin from './linkedin.svg';

const StyledContact = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  background-color: #e0cbbd;
  width: 100%;
  height: 75vh;
  color: #1d191d;

  div h1 {
    font-size: 90px;
  }

  a {
    color: #1d191d;
  }

  @media screen and (max-width: 800px) {
    text-align: center;
    div h1 {
      font-size: 70px;
      margin-left: 5%;
      margin-bottom: 2%;
      text-align: left;
    }
  }
`;

const Contact = () => {
  return (
    <StyledContact>
      <div>
        <h1>Contact me.</h1>
        <h3>Email is the best way: </h3>
        <h4>idahallner@live.se</h4>

        <h3>Or visit me on:</h3>
        <a href="https://www.linkedin.com/in/ida-hallner-545a65179/">
          <img src={linkedin} alt="in-logo" />
        </a>
        <a href="https://www.facebook.com/ida.hallner">
          <img src={facebook} alt="facebook-logo" />
        </a>
        <a href="https://github.com/idahal">
          <img src={github} alt="github-logo" />
        </a>
      </div>
    </StyledContact>
  )
}

export default Contact
