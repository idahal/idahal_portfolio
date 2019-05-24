import React from "react";
import styled from "styled-components";
import ProjectsItem from '../ProjectsItem';

const StyledProjects = styled.div`
  @media screen and (max-width: 800px) {

  }
`;


const Projects = props => {
    return (
      <StyledProjects>
        <div className="Projects">
           {props.items.map((item, key) => (
               <ProjectsItem
                    key={key}
                    name={item.name}
                    description={item.description}
                    link={item.link}
               />
           ))}
        </div>
        </StyledProjects>
    );
};



export default Projects;
