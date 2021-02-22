import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { TiDelete } from 'react-icons/ti';
import './CartViewItem.scss';
import { ProductConsumer } from '../../context';

class CartViewItem extends Component {
  render() {
    const {
      product_id,
      title,
      price,
      image_url,
      quantity,
    } = this.props.product;
    return (
      <ProductConsumer>
        {value => {
          return (
            <div className="cartContainer">
              <li>
                <div>
                  <h3 className="productName">{title}</h3>
                </div>
                <div className="productContainer">
                  <div className="imgContainer">
                    <Link>
                      <img
                        className="productImg"
                        src={image_url}
                        alt="product"
                      ></img>
                    </Link>
                  </div>
                  <div className="productQuantity">
                    <span className="oneProduct">{quantity}</span>
                    <span className="multiplecation">x</span>
                  </div>
                  <div className="productPrice">
                    <div className="displayPrice">{price}</div>
                  </div>
                  <TiDelete
                    className="deleteBtn"
                    onClick={() => value.deleteCart(product_id)}
                  />
                </div>
              </li>
            </div>
          );
        }}
      </ProductConsumer>
    );
  }
}

export default CartViewItem;
