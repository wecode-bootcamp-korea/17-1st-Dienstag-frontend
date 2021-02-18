import React, { Component } from 'react';
import { BsBell, BsList } from 'react-icons/bs';
import { CgShoppingCart } from 'react-icons/cg';
import './Nav.scss';

class Headlogos extends Component {
  render() {
    return (
      <div className="headLogos">
        <div className="topLogo">DIENSTAG</div>

        <div className="listIcon" onClick={this.props.openNav}>
          <BsList size={45} />
        </div>
        <div className="bellIcon">
          <BsBell size={35} />
        </div>
        <div className="cartIcon">
          <CgShoppingCart size={37} />
          <span></span>
        </div>
      </div>
    );
  }
}

export default Headlogos;
