import React, { Component } from 'react';
import { BsList } from 'react-icons/bs';
import { CgShoppingCart } from 'react-icons/cg';
import { FiFilter } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import './Nav.scss';

class Headlogos extends Component {
  render() {
    return (
      <div className="headLogos">
        <Link to={'/'}>
          <div className="topLogo">DIENSTAG</div>
        </Link>

        <div className="listIcon" onClick={this.props.openNav}>
          <BsList size={45} />
        </div>
        <div className="bellIcon" onClick={this.props.openfilter}>
          <FiFilter size={35} />
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
