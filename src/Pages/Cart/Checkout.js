import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import { ProductConsumer } from '../../context';
import CartViewItem from './CartViewItem';
import './Checkout.scss';

class CartDetail extends Component {
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
                <div>Total</div>
                <div>{value.totalPrice}</div>
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

export default withRouter(CartDetail);
