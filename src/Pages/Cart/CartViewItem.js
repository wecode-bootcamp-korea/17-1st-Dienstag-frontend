import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { TiDelete } from 'react-icons/ti';
import { ProductConsumer } from '../../context';
import './CartViewItem.scss';

class CartViewItem extends Component {
  render() {
    const { item_id, title, price, image_url, quantity } = this.props.product;
    return (
      <ProductConsumer>
        {value => {
          return (
            <div className="cartContainer">
              <div>
                <h3 className="productName">{title} Fury</h3>
              </div>
              <div className="productContainer">
                <div className="imgContainer">
                  <img
                    className="productImg"
                    src={image_url}
                    alt="product"
                  ></img>
                </div>
                <div className="productQuantity">
                  <span className="oneProduct">{quantity}</span>
                  <span className="multiplecation">x</span>
                </div>
                <div className="productPrice">
                  <span>$</span>
                  <div className="displayPrice"> {Number(price)}원</div>
                </div>
                <TiDelete
                  className="deleteBtn"
                  onClick={() => value.deleteCart(item_id)}
                />
              </div>
            </div>
          );
        }}
      </ProductConsumer>
    );
  }
}

export default CartViewItem;
