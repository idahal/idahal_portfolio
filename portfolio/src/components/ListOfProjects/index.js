import React, { Component } from 'react';
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
img {
  width: 100px;
  height: 100px;
}

  @media screen and (max-width: 800px) {

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
