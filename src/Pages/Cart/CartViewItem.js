import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { TiDelete } from 'react-icons/ti';
import { ProductConsumer } from '../../context';
import styled from 'styled-components';
import './CartViewItem.scss';

class CartViewItem extends Component {
  render() {
    const cartContainer = styled.div``;
    const productName = styled.div``;
    const { title, price, image_url, quantity, cart_id } = this.props.product;
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
                  onClick={() => value.deleteCart(cart_id)}
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
