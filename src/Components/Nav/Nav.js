import React, { Component } from 'react';
import NavHeadLogos from './NavHeadLogos';
import Navmodal from './NavModal';
import './Nav.scss';

class Nav extends Component {
  constructor() {
    super();
    this.state = { MainStoriesdata: [], isNavOpen: false };
  }

  openNav = () => {
    this.setState({ isNavOpen: !this.state.isNavOpen });
  };
  render() {
    const { isNavOpen } = this.state;
    return (
      <div>
        <NavHeadLogos isNavOpen={isNavOpen} openNav={this.openNav} />
        {isNavOpen && <Navmodal openNav={this.openNav} />}
      </div>
    );
  }
}

export default Nav;
