import React, { Component } from 'react';
import styled from "styled-components";
import fastSecurityDesktop from '../../../src/images/fs_square.jpg';
import memoryDesktop from '../../../src/images/memory_square.PNG';
import photoifyDesktop from '../../../src/images/photoify_square.jpg';
import ListOfProjects from "../ListOfProjects";


const projects = [  {
      name: "Photoify",
      image: photoifyDesktop,
      description: "Ett skolprojekt där uppgiften var att skapa en Instragram-klon. Projektet är skrivet i HTML, CSS, Javascript och PHP. Projektet är uppbyggt genom en SQLite databas.",
      link: "https://github.com/idahal/Photoify"
  },
  {
      name: "Fuzzy-Memory",
      image: memoryDesktop,
      description: "Ett skolprojekt där uppgiften var att bygga ett memory-spel i HTML, CSS and Javascript.",
      link: "https://github.com/idahal/Fuzzy-Memory",
  },
  {
      name: "FastSecurity 1.0",
      image: fastSecurityDesktop,
      description: "Ett gemensamt skolprojekt av Yrgo-studenter från inriktningarna webbutveckling, digital design och CG design. Uppgiften var att skapa en landningsida för en ny produkt FastSecurity, FS1.0.",
      link: "https://github.com/lovisahallgren/FastSecurity",
  }
]




const StyledProjects = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
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
                 />
             ))}
             </StyledProjects>
          </div>

          )}
}

export default Projects;
