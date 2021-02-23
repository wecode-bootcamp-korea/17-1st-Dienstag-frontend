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
      filterInfo: '',
      puryData: [],
      jonanzaData: [],
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

  readId = e => {
    const listId = e;

    fetch(`http://10.58.6.166:8000/product/category?bag_type=${listId}`, {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        this.setState({
          puryData: data.PuryList,
          jonanzaData: data.JonanzaList,
        });
      });
  };

  onFilter = e => {
    this.setState({ filterInfo: filterName[e] }, () => {
      fetch(
        `http://10.58.6.166:8000/product/filter?keyword=${this.state.filterInfo}`,
        {
          method: 'GET',
        }
      )
        .then(res => res.json())
        .then(data => {
          // console.log(data.ItemList);
          this.setState({
            backpackdata: data.ItemList,
            // recommendAccdata: data.meesage[1],
          });
        });
    });
  };

  handleClick = e => {
    this.onFilter(e);
  };

  cloaseNav = () => {
    this.setState({
      isNavOpen: false,
      isCartOpen: false,
      isFilteropen: false,
    });
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
    this.setState({
      isFilteropen: !this.state.isFilteropen,
      isNavOpen: false,
      isCartOpen: false,
    });
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
          readId: this.readId,
          cloaseNav: this.cloaseNav,
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
  5: 'S',
  6: 'M',
  7: 'L',
};
