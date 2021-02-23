import React, { Component } from 'react';
import CartViewItem from './CartViewItem';
import { FaShoppingCart } from 'react-icons/fa';
import './CartView.scss';
import { ProductConsumer } from '../../context';
import { Link } from 'react-router-dom';

class CartView extends Component {
  handleSubmit = e => {
    //장바구니로 넘어가는 기능
  };
  render() {
    return (
      <ProductConsumer>
        {value => {
          return (
            <div className="cartView">
              <li></li>
              <div className="lol">
                {value.cartList.map(product => {
                  return <CartViewItem key={product.id} product={product} />;
                })}
                <div className="checkoutContainer">
                  <div>
                    <span className="textTotal">Total</span>
                    <span>₩</span>
                    <span className="totalPrice">2,422,00</span>
                  </div>
                  <div>
                    <Link to="/checkout">
                      <div className="checkoutBtnContainer">
                        <div onClick={value.hanldeCheckout}>
                          <FaShoppingCart />
                          <span className="checkoutBtn">
                            CONTINUE TO CHECKOUT
                          </span>
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          );
        }}
      </ProductConsumer>
    );
  }
}

export default CartView;
