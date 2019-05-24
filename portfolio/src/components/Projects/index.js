import React  from "react"
import styled from "styled-components";



const StyledProjects = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: #151d1b;
    width: 100%;
    color: #000000;


  @media screen and (max-width: 800px) {

  }
`;

const Projects = () => {
        return (
          <StyledProjects>

              <h1>Hejhej</h1>

          </StyledProjects>
        )
}

export default Projects
