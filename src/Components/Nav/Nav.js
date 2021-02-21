import React, { Component } from 'react';
import NavHeadLogos from './NavHeadLogos';
import Navmodal from './NavModal';
import FilterModal from '../../Pages/Filter/FilterModal';
import './Nav.scss';

class Nav extends Component {
  constructor() {
    super();
    this.state = { MainStoriesdata: [], isNavOpen: false, isFilteropen: false };
  }

  openNav = () => {
    this.setState({ isNavOpen: !this.state.isNavOpen, isFilteropen: false });
  };
  openFilter = () => {
    this.setState({ isFilteropen: !this.state.isFilteropen, isNavOpen: false });
  };
  render() {
    const { isNavOpen, isFilteropen } = this.state;
    return (
      <div className="Nav">
        <NavHeadLogos
          isNavOpen={isNavOpen}
          openNav={this.openNav}
          openfilter={this.openFilter}
        />
        {isNavOpen && <Navmodal openNav={this.openNav} />}
        {isFilteropen && <FilterModal openFilter={this.openFilter} />}
      </div>
    );
  }
}

export default Nav;
