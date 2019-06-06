import React from 'react';
import styled from "styled-components";

const StyledFooter = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #ffffff;
  width: 100%;
  height: 15vh;
  color: #1d191d;

  hr {
    text-decoration: none;
    width: 80%;
    border: 2px #1d191d solid;
  }

  p {
  align-self: flex-end;
  }

@media screen and (max-width: 800px) {
  }
`;

const Footer = () => (
  <StyledFooter>
    <hr></hr>
    <p>Copyright Ida Hallner {(new Date().getFullYear())}</p>
  </StyledFooter>
)


export default Footer;
