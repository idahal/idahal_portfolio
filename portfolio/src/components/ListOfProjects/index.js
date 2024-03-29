import React, { Component } from 'react';
import styled from "styled-components";


const StyledProjectsItem = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  background-color: #ffffff;
  width: 30%;
  color: #1d191d;
  border: 3px solid #e0cbbd;
  border-radius: 10px;
  text-align: center;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  margin-bottom: 2%;

img {
  width: 70%;
}

a {
  text-decoration: none;
  font-weight: bold;
  color: #1d191d;
}

header p {
  padding: 5%;
}

:hover {
  width: 30%;
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
            <p><a href={this.props.link}>More about the project...</a></p>
          </div>
        </StyledProjectsItem>
    )
  }
}

export default ListOfProjects;
