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
      noneUserCart: [],
      totalPrice: 0,
      isBuyingProduct: true,
      token: '',
      cartId: '',
      isFilteropen: false,
      puryData: [],
      jonanzaData: [],
      backpackdata: [],
    };
  }

  getToken = () => {
    return localStorage.getItem('token');
  };

  componentDidMount() {
    const token = this.getToken();
    console.log(token);
    token ? this.handleCartList() : this.handleNoneUserCart();
  }

  handleNoneUserCart = () => {
    const cartList = localStorage.getItem('product');
    console.log('NoneuserHandle cart >>>>>>', cartList);
    this.setState({
      cartList: cartList,
    });
  };

  noneUserAddCart = id => {
    //none user api
    fetch(`http://10.58.5.135:8000/cart/${id}`, {
      isFilteropen: false,
      backpackdata: [],
      filterInfo: '',
      puryData: [],
      jonanzaData: [],
    });
  };

  // componentDidMount() {
  //   fetch('/data/totalProducts.json', {
  //     method: 'GET',
  //   })
  //     .then(res => res.json())
  //     .then(data => {
  //       console.log(data);
  //       //구현해야할 부분: totalPrice, 같은 값이 있을때
  //       this.setState(
  //         {
  //           noneUserCart: data,
  //         },
  //         () => this.state.noneUserCart
  //       );
  //     });
  // }

  readId = e => {
    console.log('eeeeeeeee');
    const listId = e;

    fetch(`http://10.58.6.143:8000/product/category?bag_type=${listId}`, {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        this.setState({
          puryData: data['data'][0][`D132 Pury`],
          jonanzaData: data['data'][1][`D133 Jonanza`],
        });
        console.log(data);
      });
    this.closeNav();
  };

  onFilter = e => {
    this.setState({ filterInfo: filterName[e] }, () => {
      fetch(
        `http://10.58.6.143:8000/product/filter?keyword=${this.state.filterInfo}`,
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

  closeNav = () => {
    this.setState({
      isNavOpen: false,
      isCartOpen: false,
      isFilteropen: false,
    });
  };

  handleClick = e => {
    this.onFilter(e);
    this.closeNav();
  };

  openNav = () => {
    const { isNavOpen } = this.state;
    this.setState({
      isNavOpen: !isNavOpen,
      isCartOpen: false,
      isFilteropen: false,
    });
  };

  showCart = () => {
    const { isCartOpen } = this.state;
    this.setState({
      isCartOpen: !isCartOpen,
      isNavOpen: false,
      isFilteropen: false,
    });
  };

  //cart
  addCart = (bagId, token) => {
    fetch('http://10.58.5.135:8000/cart', {
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
        result.message === false && this.setState({ isBuyingProduct: false });
        console.log('cart 추가할때 >>>>>, ', result, result.message);
        this.handleCartList();
      });
  };

  handleCartList = () => {
    const token = this.getToken();
    // console.log('aaaaaaa');
    token &&
      fetch(`http://10.58.5.135:8000/cart`, {
        method: 'GET',
        headers: { Authorization: token },
      })
        .then(res => res.json())
        .then(data => {
          const {
            total_items_list: cartList,
            total_items: totalProducts,
          } = data.data;

          let totalPrice = 0;
          for (let item of cartList) {
            totalPrice += Number(item.price);
          }

          this.setState(
            {
              cartList: cartList,
              totalProducts: totalProducts,
              totalPrice: totalPrice,
            },
            () => console.log(this.state.cartList)
          );
        });
  };

  deleteCart = id => {
    const token = this.getToken();
    fetch(`http://10.58.5.135:8000/cart/${id}`, {
      method: 'DELETE',
      headers: { Authorization: token },
    })
      .then(res => res.json())
      .then(data => {
        this.handleCartList();
      });
  };

  handleCheckout = data => {
    const {
      email,
      billingFirstName,
      billingLastName,
      billingStreetNumber,
      billingAdditionalAddress,
      billingDistrict,
      billingCity,
      billingPostalCode,
      billingPhoneNumber,
      billingCountry,
      shippingCountry,
      shippingFirstName,
      shippingLastName,
      shippingStreetNumber,
      shippingAdditionalAddress,
      shippingDistrict,
      shippingCity,
      shippingPostalCode,
      shippingPhoneNumber,
      isSame,
    } = data;
    console.log(data);

    fetch('http://10.58.7.188:8000/cart/checkout', {
      method: 'POST',
      body: JSON.stringify({
        email: email,
        billing_first_name: billingFirstName,
        billing_last_name: billingLastName,
        billing_street_number: billingStreetNumber,
        billing_additional_address: billingAdditionalAddress,
        billing_district: billingDistrict,
        billing_city: billingCity,
        billing_postal_code: billingPostalCode,
        billing_phone_number: billingPhoneNumber,
        billing_country: billingCountry,
        shipping_country: isSame ? billingCountry : shippingCountry,
        shipping_first_name: isSame ? billingFirstName : shippingFirstName,
        shipping_last_name: isSame ? billingLastName : shippingLastName,
        shipping_street_number: isSame
          ? billingStreetNumber
          : shippingStreetNumber,
        shipping_additional_address: isSame
          ? billingAdditionalAddress
          : shippingAdditionalAddress,
        shipping_district: isSame ? billingDistrict : shippingDistrict,
        shipping_city: isSame ? billingCity : shippingCity,
        shipping_postal_code: isSame ? billingPostalCode : shippingPostalCode,
        shipping_phone_number: isSame
          ? billingPhoneNumber
          : shippingPhoneNumber,
      }),
    })
      .then(res => res.json())
      .then(data => {
        this.handleCartList();
      });
  };

  openFilter = () => {
    this.setState({
      isFilteropen: !this.state.isFilteropen,
      isNavOpen: false,
      isCartOpen: false,
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
          handleCartList: this.handleCartList,
          deleteCart: this.deleteCart,
          handleCheckout: this.handleCheckout,
          getToken: this.getToken,
          openFilter: this.openFilter,
          habdleCartLsit: this.habdleCartLsit,
          onFilter: this.onFilter,
          handleClick: this.handleClick,
          readId: this.readId,
          closeNav: this.closeNav,
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
