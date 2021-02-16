import React, { Component } from 'react';
import { BsList } from 'react-icons/bs';
import { BsBell } from 'react-icons/bs';
import { CgShoppingCart } from 'react-icons/cg';
import './Nav.scss';

class Headlogos extends Component {
  render() {
    return (
      <>
        <div className="headlogos">
          <div className="top-logo">DIENSTAG</div>

          <div className="listicon" onClick={this.props.openNav}>
            <BsList size={45} />
          </div>
          <div className="bellicon">
            <BsBell size={35} />
          </div>
          <div className="carticon">
            <CgShoppingCart size={37} />
          </div>
        </div>
      </>
    );
  }
}

export default Headlogos;
