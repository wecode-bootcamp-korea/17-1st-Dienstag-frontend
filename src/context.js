// import { FALSE } from 'node-sass';
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
      isFilteropen: false,
      backpackdata: [],
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

    fetch('/data/cartList.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        this.setState({
          cartList: data,
        });
      });

    fetch('/data/backpackdata.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        //console.log(data);
        this.setState(
          {
            backpackdata: data,
            // recommendAccdata: data.meesage[1],
          },
          () => console.log(this.state.backpackdata)
        );
      });
  }

  openNav = () => {
    this.setState({
      isNavOpen: !this.state.isNavOpen,
      isCartOpen: false,
      isFilteropen: false,
    });
  };
  showCart = () => {
    this.setState({
      isCartOpen: !this.state.isCartOpen,
      isNavOpen: false,
      isFilteropen: false,
    });
  };
  openFilter = () => {
    this.setState({ isFilteropen: !this.state.isFilteropen, isNavOpen: false });
  };
  habdleCartLsit = () => {
    fetch('/data/cartList.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        this.setState({
          cartList: data,
        });
      });
  };

  render() {
    return (
      <ProductContext.Provider
        value={{
          ...this.state,
          openNav: this.openNav,
          showCart: this.showCart,
          openFilter: this.openFilter,
          habdleCartLsit: this.habdleCartLsit,
        }}
      >
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}

export { ProductProvider, ProductConsumer };
