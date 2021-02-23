import React, { Component } from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import { ProductConsumer } from '../../context';
import CartViewItem from './CartViewItem';
import './Cart.scss';

class Cart extends Component {
  goToMain = () => {
    this.props.history.push('/');
  };
  render() {
    return (
      <div>
        <div>SHOPPING CART</div>
        <p>1 ITEM</p>
        <ProductConsumer>
          {value => {
            return (
              <div className="checkoutContainer">
                {value.cartList.map(product => {
                  return (
                    <CartViewItem key={product.product_id} product={product} />
                  );
                })}
                <div className="priceContainer">
                  <div className="total">Total</div>
                  <div className="price">$120000</div>
                </div>
                <div className="formAction" onClick={this.goToMain}>
                  <FaArrowLeft className="icon" />
                  <input type="button" defaultValue="Back to the shop" />
                </div>
              </div>
            );
          }}
        </ProductConsumer>
      </div>
    );
  }
}

export default Cart;
