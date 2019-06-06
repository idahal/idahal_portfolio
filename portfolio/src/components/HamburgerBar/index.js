import React, { Component } from 'react';
import { Link } from "@reach/router";
import styled from "styled-components";
import hamburger from './hamburger.svg';

const StyledHamburgerBar = styled.div`
@media screen and (max-width: 800px) {
  height: 10vh;

  button {
    background: none;
    border: none;
    position: absolute;
    top: 10px;
    right: 10px;
    z-index: 1;
    }

  .menu {
    width: 100vw;
    height: 50vh;
    background: #ffffff;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    }

  a {
    color: #1d191d;
    text-decoration: none;
    font-weight: 700;
    font-size: 18px;
    padding-bottom: 10px;
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

  closeMenu() {
    this.setState({ showMenu: false }, () => {
      document.removeEventListener('click', this.closeMenu);
    });
  }

  render() {
    return (
      <div>
        <StyledHamburgerBar>
          <button onClick={this.showMenu}>
            <img src={hamburger} alt="hamburger" />
          </button>
        {
          this.state.showMenu ? (
              <div className="menu">
                <Link to="/">Home</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/contact">Contact</Link>
              </div>
          ) : (null)
        }
        </StyledHamburgerBar>
      </div>
    );
  }
}

export default HamburgerBar;
