import React from 'react';
import styled from "styled-components";

const StyledProjectsItem = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: column;
  align-items: center;
  background-color: #ffffff;
  width: 50%;
  color: red;
  border: 1px solid black;
  border-radius: 4px;


  @media screen and (max-width: 800px) {

  }
`;

const ProjectsItem = props => {
    return (
      <StyledProjectsItem>
        <div>
            <h2>{props.name}</h2>
            <p>{props.description}</p>
            <a href={props.link}>Läs mer</a>
        </div>
      </StyledProjectsItem>
    );
};


export default ProjectsItem;
