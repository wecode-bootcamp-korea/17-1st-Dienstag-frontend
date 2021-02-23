import React, { Component } from 'react';
import CartViewItem from './CartViewItem';
import { FaShoppingCart } from 'react-icons/fa';
import { ProductConsumer } from '../../context';
import { withRouter } from 'react-router-dom';
import './CartView.scss';

class CartView extends Component {
  hanldeCheckout = () => {
    this.props.history.push('/checkout');
  };
  render() {
    return (
      <ProductConsumer>
        {value => {
          if (value.cartList) {
            return (
              <>
                <div className="modalOutside" onClick={value.openNav}></div>
                <div className="cartView">
                  <li></li>
                  <div className="cartList">
                    {value.cartList.map(product => {
                      return (
                        <CartViewItem
                          key={product.product_id}
                          product={product}
                        />
                      );
                    })}
                    <div className="checkoutContainer">
                      <div className="priceContainer">
                        <span className="textTotal">Total</span>
                        <span>₩</span>
                        <span className="totalPrice">{value.totalPrice}</span>
                      </div>
                      <div>
                        <div className="checkoutBtnContainer">
                          <div
                            className="formAction"
                            onClick={() => {
                              value.handleCartList();
                              this.hanldeCheckout();
                            }}
                          >
                            <FaShoppingCart className="icon" />
                            <input
                              type="button"
                              className="checkoutBtn"
                              defaultValue=" CONTINUE TO CHECKOUT"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            );
          } else {
            return (
              <>
                <div className="modalOutside" onClick={value.openNav}></div>
                <div className="cartView">
                  <div className="emptyCart">카트가 비었습니다.</div>
                </div>
              </>
            );
          }
        }}
      </ProductConsumer>
    );
  }
}

export default withRouter(CartView);
