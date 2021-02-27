import React, { Component } from 'react';
import { ProductConsumer } from '../../context';
import './CartItem.scss';

class CartItem extends Component {
  render() {
    const {
      title,
      price,
      image_url,
      quantity,
      model_number,
    } = this.props.product;
    console.log(this.props.product);
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
                    <div>
                      {model_number},{title}
                    </div>
                  </div>
                  <div className="price">${Number(price).toLocaleString()}</div>
                </div>
              </div>
            </>
          );
        }}
      </ProductConsumer>
    );
  }
}

export default CartItem;
