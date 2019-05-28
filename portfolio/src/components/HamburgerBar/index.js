import React, { Component } from 'react';
import { Link } from "@reach/router";
import styled from "styled-components";


const StyledHamburgerBar = styled.div`
@media screen and (max-width: 800px) {
    width: 100%;
    height: 10vh;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    background-color: #ffffff;
    font-size: 18px;
  a {
    color: #1d191d;
    text-decoration: none;
    font-weight: 700;
    font-size: 18px;
    margin: 0 10px;
    dispaly: block;
  }
}
  @media screen and (min-width: 800px) {
    display: none;
  }
`;

class HamburgerBar extends Component {
  constructor() {
    super();

    this.state = {
      showMenu: false,
    };

    this.showMenu = this.showMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
  }

  showMenu(event) {
    event.preventDefault();

    this.setState({ showMenu: true }, () => {
      document.addEventListener('click', this.closeMenu);
    });
  }

  closeMenu(event) {
    if (!this.dropdownMenu.contains(event.target)) {
      this.setState({ showMenu: false }, () => {
        document.removeEventListener('click', this.closeMenu);
      });
    }
  }

  render() {
    return (
      <div>
        <StyledHamburgerBar>
          <button onClick={this.showMenu}>
            <svg width="36" height="24" viewBox="0 0 36 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="36" height="3.0" rx="1.8" fill="#ffffff"/>
              <rect y="9.6001" width="36" height="3.0" rx="1.8" fill="#ffffff"/>
              <rect y="20.3999" width="36" height="3.0" rx="1.8" fill="#ffffff"/>
            </svg>
          </button>
        </StyledHamburgerBar>

        {
          this.state.showMenu ? (
              <div className="menu" ref={(e) => {this.dropdownMenu = e;}}>
                <Link to="/">Home</Link>
                <Link to="/projects">Projects</Link>
              </div>
          ) : (null)
        }
      </div>
    );
  }
}


export default HamburgerBar;
