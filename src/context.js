import React, { Component } from 'react';

const ProductContext = React.createContext();
const ProductConsumer = ProductContext.Consumer;

class ProductProvider extends Component {

  constructor() {
    super();
    this.state = {
      totalProducts: 0,
      isLogin: false,
      cartList: [],
      isNavOpen: false,
      isCartOpen: false,
      noneUserCart: [],
      token: localStorage.getItem('token'),
      totalPrice: 0,
    };
  }

  componentDidMount() {
    fetch(`http://10.58.2.91:8000/cart`, {
      method: 'GET',
      headers: { Authorization: this.state.token },
    })
      .then(res => res.json())
      .then(data => {
        const {
          total_items_list: cartList,
          total_price: totalPrice,
          total_products: totalProducts,
        } = data.data;

        this.setState(
          {
            cartList: cartList,
            totalPrice: totalPrice,
            totalProducts: totalProducts,
          },
          () => this.state.cartList
        );
      });
  }
  // nav
  openNav = () => {
    this.setState({
      isNavOpen: !this.state.isNavOpen,
      isCartOpen: false,
    });
  };

  showCart = () => {
    this.setState({
      isCartOpen: !this.state.isCartOpen,
      isNavOpen: false,
    });
  };

  //cart
  addCart = (bagId, token) => {
    fetch('http://10.58.2.91:8000/cart', {
      method: 'POST',
      headers: { Authorization: token },
      body: JSON.stringify({
        product_id: bagId,
      }),
    })
      .then(response => response.json())
      .catch(function (error) {
        console.log(error);
      })
      .then(result => {
        this.handleCartLsit();
      });
  };

  handleCartLsit = () => {
    fetch(`http://10.58.2.91:8000/cart`, {
      method: 'GET',
      headers: { Authorization: this.state.token },
    })
      .then(res => res.json())
      .then(data => {
        const {
          total_items_list: cartList,
          total_price: totalPrice,
          total_products: totalProducts,
        } = data.data;
        this.setState({
          cartList: cartList,
          totalPrice: totalPrice,
          totalProducts: totalProducts,
        });
      });
  };

  deleteCart = id => {
    const token = localStorage.getItem('token');
    fetch(`http://10.58.2.91:8000/cart/${id}`, {
      method: 'DELETE',
      headers: { Authorization: token },
    })
      .then(res => res.json())
      .then(data => {
        this.handleCartLsit();
      });
  };

  render() {
    return (
      <ProductContext.Provider
        value={{
          ...this.state,
          openNav: this.openNav,
          showCart: this.showCart,
          addCart: this.addCart,
          handleCartLsit: this.handleCartLsit,
          deleteCart: this.deleteCart,
        }}
      >
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}

export { ProductProvider, ProductConsumer };
