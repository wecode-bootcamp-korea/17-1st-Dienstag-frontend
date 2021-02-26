import React, { Component } from 'react';
import { TiDelete } from 'react-icons/ti';
import { ProductConsumer } from '../../context';
import './CartViewItem.scss';

class CartViewItem extends Component {
  render() {
    const {
      title,
      price,
      image_url,
      quantity,
      cart_id,
      model_number,
    } = this.props.product;
    return (
      <ProductConsumer>
        {value => {
          return (
            <>
              <div className="cartContainer">
                <div className="productContainer">
                  <img src={image_url} alt="product" />
                  <div className="productText">
                    <div>X {quantity}</div>
                    <div>{model_number} </div>
                    <div>{title}</div>
                  </div>
                  <div className="price">${Number(price).toLocaleString()}</div>
                </div>
                <TiDelete
                  className="deleteBtn"
                  onClick={() => value.deleteCart(cart_id)}
                />
              </div>
            </>
          );
        }}
      </ProductConsumer>
    );
  }
}

export default CartViewItem;
