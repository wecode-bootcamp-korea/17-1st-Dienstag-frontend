import React, { Component } from 'react';
import { BsList } from 'react-icons/bs';
import { CgShoppingCart } from 'react-icons/cg';
import { FiFilter } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { ProductConsumer } from '../../context';
import './Nav.scss';

class Headlogos extends Component {
  render() {
    return (
      <ProductConsumer>
        {value => {
          return (
            <div className="headLogos">
              <Link to="/">
                <div className="topLogo" onClick={value.cloaseNav}>
                  DIENSTAG
                </div>
              </Link>
              <div className="listIcon" onClick={value.openNav}>
                <BsList size={45} />
              </div>
              <div className="bellIcon" onClick={value.openFilter}>
                <FiFilter size={35} />
              </div>
              <div
                className="cartIcon"
                onClick={() => {
                  value.showCart();
                }}
              >
                <CgShoppingCart size={37} />
                <span>{value.totalProducts}</span>
              </div>
            </div>
          );
        }}
      </ProductConsumer>
    );
  }
}

export default Headlogos;
