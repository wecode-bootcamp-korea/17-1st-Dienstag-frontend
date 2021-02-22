import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { TiDelete } from 'react-icons/ti';
import { ProductConsumer } from '../../context';
import './CartViewItem.scss';

class CartViewItem extends Component {
  render() {
    const { id, title, price, img, quantity } = this.props.product;
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
                      <img className="productImg" src={img} alt="product"></img>
                    </Link>
                  </div>
                  <div className="productQuantity">
                    <span className="oneProduct">{quantity}</span>
                    <span
                      className="multiplecation"
                      onClick={value.deleteCart(id)}
                    >
                      x
                    </span>
                  </div>
                  <div className="productPrice">
                    <div className="displayPrice">{price}</div>
                  </div>
                  <TiDelete className="deleteBtn" />
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
