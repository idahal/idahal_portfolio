import React, { Component } from 'react';
import styled from "styled-components";


const StyledProjectsItem = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  width: 30%;
  color: #1d191d;
  border: 3px solid #e0cbbd;
  border-radius: 4px;
  text-align: center;

img {
  width: 100%;
}

  @media screen and (max-width: 800px) {
      width: 80%;
      margin-bottom: 2%;
  }
`;

class ListOfProjects extends Component {
    render() {
        return (
          <StyledProjectsItem>
              <div>
                  <h3>{this.props.name}</h3>
                  <img src={this.props.image} alt="project_photo"/>
                  <p>{this.props.description}</p>
                  <a href={this.props.link}>Läs mer</a>
              </div>
              </StyledProjectsItem>
        )
        }
}

export default ListOfProjects;
