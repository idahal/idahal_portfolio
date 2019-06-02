import React  from "react"
import styled from "styled-components";

const StyledContact = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  background-color: #e0cbbd;
  width: 100%;
  height: 85vh;
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
      font-size: 50px;
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

        <h3>Or visit me on social media:</h3>
        <a href="https://www.linkedin.com/in/ida-hallner-545a65179/">
          <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="linkedin" className="svg-inline--fa fa-linkedin fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" width="73" height="70" viewBox="0 0 783 780"><path fill="currentColor" d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"></path></svg>
        </a>
        <a href="https://www.facebook.com/ida.hallner">
          <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="facebook-square" className="svg-inline--fa fa-facebook-square fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" width="73" height="70" viewBox="0 0 783 780"><path fill="currentColor" d="M400 32H48A48 48 0 0 0 0 80v352a48 48 0 0 0 48 48h137.25V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.27c-30.81 0-40.42 19.12-40.42 38.73V256h68.78l-11 71.69h-57.78V480H400a48 48 0 0 0 48-48V80a48 48 0 0 0-48-48z"></path></svg>
        </a>
      </div>
    </StyledContact>
  )
}

export default Contact
