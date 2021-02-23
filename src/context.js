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
    };
  }
  componentDidMount() {
    fetch('/data/totalProducts.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        this.setState({
          totalProducts: data[0].totalProducts,
        });
      });
  }

  openNav = () => {
    this.setState({
      isNavOpen: !this.state.isNavOpen,
      isCartOpen: this.state.isCartOpen && !this.state.isCartOpen,
    });
  };
  showCart = () => {
    this.setState({
      isCartOpen: !this.state.isCartOpen,
      isNavOpen: this.state.isNavOpen && !this.state.isNavOpen,
    });
  };
  render() {
    return (
      <ProductContext.Provider
        value={{
          ...this.state,
          openNav: this.openNav,
          showCart: this.showCart,
        }}
      >
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}

export { ProductProvider, ProductConsumer };
