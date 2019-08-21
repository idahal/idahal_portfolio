import React, { Component } from 'react';
import styled from "styled-components";
import ListOfProjects from "../ListOfProjects";
import projects from '../../../src/data/projects.js';;

const StyledProjects = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  background-color: #ffffff;
  width: 100%;

@media screen and (max-width: 800px) {
  flex-direction: column;
  align-items: center;
  }
`;

class Projects extends Component {
  render() {
    return (
      <div className="Projects">
        <StyledProjects>
          {projects.map((e, key) => (
            <ListOfProjects
              key={key}
              image={e.image}
              description={e.description}
              link={e.link}
            />
         ))}
      </StyledProjects>
    </div>
  )}
}

export default Projects;
