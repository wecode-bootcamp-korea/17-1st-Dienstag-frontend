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
    };
  }

  getToken = () => {
    return localStorage.getItem('token');
  };

  componentDidMount() {
    this.setState({
      token: this.getToken(),
    });
    fetch(`http://10.58.1.193:8000/cart`, {
      method: 'GET',
      headers: { Authorization: this.getToken() },
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
          () => console.log(this.state.cartList)
        );
      });
  }
  // nav
  openNav = () => {
    const { isNavOpen } = this.state;
    this.setState({
      isNavOpen: !isNavOpen,
      isCartOpen: false,
    });
  };

  showCart = () => {
    const { isCartOpen } = this.state;
    this.setState({
      isCartOpen: !isCartOpen,
      isNavOpen: false,
    });
  };

  //cart
  addCart = (bagId, token) => {
    fetch('http://10.58.1.193:8000/cart/product', {
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
        result.message && this.setState({ isBuyingProduct: true });
        console.log(result.message);
        this.handleCartList();
      });
  };

  handleCartList = () => {
    const token = this.getToken();
    fetch(`http://10.58.1.193:8000/cart`, {
      method: 'GET',
      headers: { Authorization: token },
    })
      .then(res => res.json())
      .then(data => {
        //console.log(data.data);
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
    const token = this.getToken();
    fetch(`http://10.58.1.193:8000/cart${1}`, {
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

    fetch('http://10.58.1.225:8000/cart/checkout', {
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
        }}
      >
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}

export { ProductProvider, ProductConsumer };
