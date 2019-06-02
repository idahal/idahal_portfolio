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
  width: 90%;
}

a {
  text-decoration: none;
  font-weight: bold;
  color: #1d191d;
}

:hover {
  width: 32%;
  background-color: #e0cbbd;
}

@media screen and (max-width: 800px) {
  width: 80%;
  margin-bottom: 2%;
    :hover {
      width: 82%;
    }
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
            <p><a href={this.props.link}>Mer om projektet...</a></p>
          </div>
      </StyledProjectsItem>
    )
  }
}

export default ListOfProjects;
