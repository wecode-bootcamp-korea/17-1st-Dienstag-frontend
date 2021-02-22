// import { FALSE } from 'node-sass';
import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

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
      filterInfo: '',
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
  }

  onFilter = e => {
    this.setState({ filterInfo: filterName[e] }, () => {
      fetch('/data/a.json', {
        method: 'GET',
      })
        .then(res => res.json())
        .then(data => {
          this.setState({
            backpackdata: data,
            // recommendAccdata: data.meesage[1],
          });
        });
    });
  };
  //비동기식 로직구현 완료
  handleClick = e => {
    this.onFilter(e);
  };

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
          onFilter: this.onFilter,
          handleClick: this.handleClick,
        }}
      >
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}

export { ProductProvider, ProductConsumer };

const filterName = {
  1: 'red',
  2: 'green',
  3: 'blue',
  4: 'yellow',
  5: 'small',
  6: 'medium',
  7: 'large',
};
