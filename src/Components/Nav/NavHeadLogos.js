import React, { Component } from 'react';
import { BsBell, BsList } from 'react-icons/bs';
import { CgShoppingCart } from 'react-icons/cg';
import { ProductConsumer } from '../../context';
import './Nav.scss';

class Headlogos extends Component {
  render() {
    return (
      <ProductConsumer>
        {value => {
          return (
            <div className="headLogos">
              <div className="topLogo">DIENSTAG</div>

              <div className="listIcon" onClick={value.openNav}>
                <BsList size={45} />
              </div>
              <div className="bellIcon">
                <BsBell size={35} />
              </div>
              <div
                className="cartIcon"
                onClick={() => {
                  //value.handleCartList();
                  //value.showCart();
                  //value.addCart(23, value.getToken());
                  value.deleteCart(90);
                  console.log(value.cartId);
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
